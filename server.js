const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('cookie-session');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 3000;

// set secret key
const SECRETKEY = 'I want to pass COMPS3810SEF';

// Api
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Session setting
app.use(session({
    name: 'loginSession',
    keys: [SECRETKEY]
}));

// Set (public) File
app.use(express.static('public'));

// set EJS
app.set('view engine', 'ejs');

// MongoDB
const uri = 'mongodb+srv://kelvin:2002213@kelvincluster1.ljnhj.mongodb.net/librarySystem?retryWrites=true&w=majority';

// Mongoose Schema
const userSchema = require('./models/User');
const User = mongoose.model('User', userSchema);

const BookSchema = require('./models/books');
const Book = mongoose.model('Book', BookSchema);

// Mongoose connect
async function main() {
    await mongoose.connect(uri);
    console.log('Mongoose Connected!');
}

main()
    .then()
    .catch(() => {
        console.log("Mongoose Connection Failed");
    });

// Middleware for authentication
const isAuthenticated = (req, res, next) => {
    if (req.session.authenticated) {
        return next();
    } else {
        res.redirect('/login');
    }
};

// Main Paper
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/Main.html');
});

// Login
app.get('/login', (req, res) => {
    res.status(200).render('login', {message:''});
});

app.post('/login', async (req, res) => {

    try {
        const userList = await User.find();
        
        for (let i in userList) {
            if (userList[i].username === req.body.username && userList[i].password === req.body.password) {
                req.session.authenticated = true;
                req.session.username = req.body.username;
                return res.redirect('/home');
            } else if (req.body.username=='' && req.body.password=='') {
                return res.redirect('/login');
            } else if (req.body.username=='') {
                return res.render("login", {message:'Please type the username'});
            } else if (req.body.password=='') {
                return res.render("login", {message:'Please type the password'});
            } 
        }
        req.session.authenticated=false;
        return res.render("login", {message:'Wrong username or password.'});

    } catch (err) {
        console.error("Login Error:", err);
    }
});

// Logout
app.post('/logout', (req, res) => {
    req.session = null;
    res.redirect('/');
});

// Home page
app.get('/home', isAuthenticated, async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).render("books", { username: req.session.username, books });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Internal Server Error");
    }
});

// CRUD APIs for Books
// Create (GET)
app.get('/books/create', async (req, res) => {
    try {
        const { title, author, year, genre, ISBN } = req.query;
        if (!title || !author || !year || !genre || !ISBN) {
            return res.status(400).send('Missing fields');
        }
        const newBook = new Book({ title, author, year, genre, ISBN });
        await newBook.save();
        res.status(201).send('Book created successfully');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Read (POST)
app.post('/books/read', async (req, res) => {
    try {
        const { title, author, genre } = req.body;
        const query = {};

        if (title) query.title = { $regex: title, $options: 'i' };
        if (author) query.author = { $regex: author, $options: 'i' };
        if (genre) query.genre = { $regex: genre, $options: 'i' };

        const books = await Book.find(query);
        res.status(200).json(books);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Update (PUT)
app.put('/books/:id', async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(updatedBook);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Delete books
app.delete('/books/:id', async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).send('Book deleted successfully');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Search books with query
app.get('/books/search', async (req, res) => {
    try {
        const { title, author, genre, year } = req.query; // 提取查询参数
        const query = {};

        if (title) query.title = { $regex: title, $options: 'i' }; // 模糊查询标题
        if (author) query.author = { $regex: author, $options: 'i' }; // 模糊查询作者
        if (genre) query.genre = { $regex: genre, $options: 'i' }; // 精确匹配类别
        if (year) query.year = parseInt(year); // 匹配出版年份

        const books = await Book.find(query); // 根据条件查询书籍
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//Search at Main page
app.get('/search', async (req, res) => {
    try {
        const query = req.query.q || '';
        const genre = req.query.genre || '';
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const skip = (page - 1) * limit;

        // create query
        let searchCriteria = {
            $or: [
                { title: { $regex: query, $options: 'i' } },
                { author: { $regex: query, $options: 'i' } }
            ]
        };

        //
        if (genre) {
            searchCriteria.genre = { $regex: genre, $options: 'i' };
        }

        const books = await Book.find(searchCriteria)
            .skip(skip)
            .limit(limit);

        const totalBooks = await Book.countDocuments(searchCriteria);

        res.status(200).json({
            books,
            currentPage: page,
            totalPages: Math.ceil(totalBooks / limit)
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
