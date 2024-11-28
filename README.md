
# Library Management System

cloud-based server URL:
https://three81project-rddj.onrender.com

## Group:20

Li Sin Chiu 13817508

To Siu Lap 13709398

Cheng Wing Choi 13714095

Chris Limbu 13861857

Guo Ke Jian 12928966

## Introduction

The **Library Management System** is a comprehensive tool designed to streamline book management for library administrators while offering a user-friendly interface for visitors. 

- **Administrators** have full control over the library's collection, with features such as:
  - Login/Logout
  - Adding new books.
  - Editing existing book details.
  - Deleting books from the database.
  - Searching for books based on various criteria.

- **Regular Users** can:
  - Browse the library's collection.
  - Search for books directly from the main page.

Please note: **Login access is restricted to administrators only**, ensuring secure and efficient management of the system.




```
project_root/

├── models/
│   ├── User.js
│   ├── books.js
├── public/
│   ├── Main.html
│   ├── Message.js
│   ├── books/
│	  ├── some book jpg
│   ├── css/
│	  ├── indexStyle.css
│	  ├── loginStyle.css
│   ├── book1.jpg
│   ├── book2.jpg
│   ├── book3.jpg
│   ├── book4.jpg
│   ├── logo.jpg
├── views/
│   ├── login.ejs
│   ├── books.ejs
│   ├── searchResults.ejs
├── server.js
├── package.json
├── package-lock.json
├── README.md
```
## Project File Intro

- **server.js**: Sets up server, handles routes like login, logout.

- **package.json**:

- **public**:
  - **Main.html**: Home page UI design using HTML.
    - Provides library information and popular books of the week.
    - Users can search for books.
    - Library Staff can log in to enter the Admin page.
  - **Message.js**:
  - **css/**:
    - **indexStyle.css**:
    - **loginStyle.css**:
  - **books/**: Folder with book pictures.
    - **book1 - 4.jpg**: JPG images used on the home page.
    - **logo.jpg**: Home page icon.

- **views**:
  - **book.ejs**: Admin page UI design using HTML.
    - Employees can add, delete, change, and search existing books in the library.
  - **login.ejs**: Display page for users to enter username and password to log in.
  - **searchResults.ejs**: Display query results.
    - Based on the user's search criteria, displays a list of books that meet the criteria.
    - If no books match the criteria, it shows "No books found matching your criteria."
    - Receives the list of books passed by MongoDB and generates HTML.

- **models**:
  - **book.js**: Used to declare variables.
  - **User.js**: Used to declare variables.

---

## Operation Guides

### **A) Home Page (Main.html)**

1. **Book List**
   - **Description**: Takes you to a page where you can view the list of available books in the library.
   - **How to Use**: Click on this button to explore the collection of books in different genres.

2. **About Us**
   - **Description**: Provides information about the library's mission, facilities, and services.
   - **How to Use**: Click on this button to learn more about the mission and resources offered by the library.

3. **Contact Us**
   - **Description**: Displays the library's contact details, including its address, phone number, and email.
   - **How to Use**: Click on this button to find the library's contact information in case you need assistance or have inquiries.

4. **Search**
   - **Description**: Allows you to search for books based on genre or keyword.
   - **How to Use**:
     - Enter a keyword or book title into the search bar.
     - Select a genre using the dropdown menu (optional).
     - Click the Search button to view related results.

5. **Genre-Specific Buttons**
   - **All Genres**: Displays all books available in the library, regardless of their genre.
   - **Fantasy**: Displays all books in the Fantasy genre.
   - **Non-Fiction**: Displays all books in the Non-Fiction genre.
   - **Fiction**: Displays all books in the Fiction genre.
   - **How to Use**: Click this button to browse the Fiction book collection.

6. **Search Results Section**
   - **Description**: After performing a search, the results are displayed under the Search Results section.
   - **Example Results**:
     - *The Boys of Riverside*
       - **Author**: Thomas Fuller
       - **Description**: Displays book title and author for reference.

7. **Login Button**
   - **Description**: Library Staff can log in to enter the Admin page.
   - **How to Use**: Click this button to browse the login page.


## B) Login Page
### Sample Account : **Username: admin** , **Password: 123**
1. **Username**
   - **Description**: Allows the user to input their username.

2. **Password**
   - **Description**: Allows the user to input their password.

3. **Login Button**
   - **Description**: Enables library staff to log in and access the Admin page.
   - **How to Use**: Click this button to log in with a verified username and password.
   - **Error Handling**: Error message will be displayed.

---

## C) Admin Page (book.ejs)

1. **Welcome, `<%= username %>`**
   - **Description**: Displays a personalized welcome message with the username of the currently logged-in user.

2. **Logout**
   - **Description**: Logs the user out of the system and redirects them to the login page.
   - **How to Use**: Click this button when you want to log out.

### Main Buttons

1. **Manage Books**
   - **Description**: Navigates to the main book management page, where you can view, search, edit, delete, or add books.
   - **How to Use**: Click this button to access all book management features.

2. **Add New Book**
   - **Description**: Opens a form to add a new book to the library system.
   - **How to Use**:
     - Fill in the required details like title, author, year, genre, and ISBN.
     - After entering the details, click the "Add Book" button to save the book.

### Genre Selection

1. **Select Genre**
   - **Description**: Lets you filter books based on their genre.
   - **Options**:
     - **Fantasy**: Displays only the books categorized under the Fantasy genre.
     - **Non-Fiction**: Displays only the books categorized under the Non-Fiction genre.
     - **Fiction**: Displays only the books categorized under the Fiction genre.
   - **How to Use**: Select your desired genre to filter the book list displayed below.

### Search Books

1. **Search**
   - **Description**: Allows you to search for books by title, author, or other attributes.
   - **How to Use**:
     - Enter a keyword (e.g., book title, author) in the search bar.
     - Click the "Search" button to display matching results.

### Current Books Section

1. **ALL Books**
   - **Description**: Displays the entire collection of books in the library, regardless of genre.

2. **Fantasy Books**
   - **Description**: Displays all books that belong to the Fantasy genre.

3. **Non-Fiction Books**
   - **Description**: Displays all books that belong to the Non-Fiction genre.

4. **Fiction Books**
   - **Description**: Displays all books that belong to the Fiction genre.

   - **How to Use**: This section automatically updates based on the selected genre.

### Actions for Books

1. **Edit**
   - **Description**: Allows you to update the details of a book (e.g., title, author, year, genre, or ISBN).
   - **How to Use**: Click the "Edit" button next to the book you want to modify. A form will appear where you can edit the book's details. Save your changes to update the book.

2. **Delete**
   - **Description**: Removes the book from the system.
   - **How to Use**: Click the "Delete" button next to the book you want to remove. Confirm the deletion to delete the book permanently.

---

## D) Search Results (searchResults.ejs)

- **Description**: Displays search results based on the user's input.

- **Back to Menu**: Press the button to return to the main page.


# RESTful CRUD services: 

## 1. Authentication

### Login:
- **HTTP Method**: `POST`
- **Endpoint**: `/login`
- **Description**: Logs in a admin user.
-   **"username": "admin"**,
    **"password": "123"**
```bash 
curl -X POST https://three81project-rddj.onrender.com/login \
     -H "Content-Type: application/json" \
     -d '{"username": "admin", "password": "123"}'

```
### Logout:
- **HTTP Method**: `POST`
- **Endpoint**: `/logout`
- **Description**: Logs out the user and clears the session.
```bash 
curl -X POST https://three81project-rddj.onrender.com/logout
```

## 2. Books CRUD Operations

### Create a Book
- **HTTP Method**: `GET`
- **Endpoint**: `/books/create`
- **Description**: Adds a new book to the database.
- **Query Parameters**:
  - `title` (string): Book title
  - `author` (string): Book author
  - `year` (integer): Year of publication
  - `genre` (string): Book genre
  - `ISBN` (string): ISBN code

```bash 
curl -X GET \
"https://three81project-rddj.onrender.com/books/create?title=BookName&author=AuthorName&year=2024&genre=Genre&ISBN=12345"
```

### Update a Book
- **HTTP Method**: `PUT`
- **Endpoint**: `/books/:id`
- **Description**: Updates details of a book using its ID.
- **Request Body**:
  ```json
  {
    "title": "Updated Title",
    "author": "Updated Author",
    "year": 2024
  }

```bash
curl -X PUT -H "Content-Type: application/json" \
-d '{"title":"Updated Title","author":"Updated Author","year":2024}' \
https://three81project-rddj.onrender.com/books/674867ba0ab2a69255cf95fb
```

### Delete a Book
- **HTTP Method**: `DELETE`
- **Endpoint**: `/books/:id`
- **Description**: Deletes a book by its ID.

```bash
curl -X DELETE https://three81project-rddj.onrender.com/books/674867ba0ab2a69255cf95fb
```

### Search Books with Query Parameters for admin.
- **HTTP Method**: `GET`
- **Endpoint**: `/books/search`
- **Description**: Searches books using query parameters.
- **Query Parameters**:
  - `title` (optional): Search by title (string)
  - `author` (optional): Search by author (string)
  - `genre` (optional): Search by genre (string)
  - `year` (optional): Search by year (integer)


```bash
curl -X GET \
"https://three81project-rddj.onrender.com/books/search?title=Harry%20Potter%20and%20the%20Sorcerer%27s%20Stone&author=J.K.%20Rowling&genre=Fantasy&year=1997"
```

### Search Books for Users
- **HTTP Method**: `GET`
- **Endpoint**: `/search`
- **Description**: Allows users to search books using various query parameters.
- **Query Parameters**:
  - `q` (optional): Search by title or author (string, case-insensitive).
  - `genre` (optional): Filter by genre (string, case-insensitive).
  - `page` (optional): Specify the page number for paginated results (integer, default: 1).
  - `limit` (optional): Specify the number of results per page (integer, default: 10).

- **Example Usage**:
  - Search for books with "Harry Potter" in the title or author:
    ```bash
    curl -X GET "https://three81project-rddj.onrender.com/search?q=Harry%20Potter"
    ```
  - Search for books in the "Fantasy" genre:
    ```bash
    curl -X GET "https://three81project-rddj.onrender.com/search?genre=Fantasy"
    ```



