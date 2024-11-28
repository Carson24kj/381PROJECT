Project info:Public Library System
cloud-based server URL:
https://three81project-rddj.onrender.com

Group:20
Li Sin Chiu 13817508
To Siu Lap 13709398
Cheng Wing Choi 13714095
Chris Limbu 13861857
Guo Ke Jian 12928966

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
Project file intro:
server.js：Sets up server, handles routes like login,logout

package.json：

public：
	Main.html : Home page UI design using html
		    Provide library information and popular books of the week
		    Users can search for books
		    Library Staff can login to enter Admin page
	Message.js : 
	css/ : 
		indexStyle.css : 
		loginStyle.css : 
	books/ : Folder with book pictures
	book1 - 4.jpg: JPG used on the home page
	logo.jps: Home page icon

views：
	book.ejs : Admin page UI design using html
		   Employees can add, delete, change and search existing books in the library
	login.ejs : Display page for user to enter username,passwords to login
	searchResults.ej : Display query results. Based on the user's search criteria,
			   display a list of books that meet the criteria. If no books matching your criteria are found, 
			   will show "No books found matching your criteria.".
			   Receive the list of books passed by MongoDB and generate HTML.

models：
	book.js :Used to declare variables
	User.js :Used to declare variables




Operation guides:
A.) Home page (main.html)
	1a. Book List
		Description: Takes you to a page where you can view the list of available books in the library.
		How to Use: Click on this button to explore the collection of books in different genres.
	1b. About Us
		Description: Provides information about the library's mission, facilities, and services.
		How to Use: Click on this button to learn more about the mission and resources offered by the library.
	1c. Contact Us
		Description: Displays the library's contact details, including its address, phone number, and email.
		How to Use: Click on this button to find the library's contact information in case you need assistance or have inquiries.
	2. Search
		Description: Allows you to search for books based on genre or keyword.
		How to Use:
		Enter a keyword or book title into the search bar.
		Select a genre using the dropdown menu (optional).
		Click the Search button to view related results.
	Genre-Specific Buttons
		1. All Genres (Displays all books available in the library, regardless of their genre.)
		2. Fantasy (Displays all books available in the library, regardless of their genre.)
		3. Non-Fiction (Displays all books available in the library, regardless of their genre.)
		4. Fiction (Displays all books available in the library, regardless of their genre.)
			How to Use: Click this button to browse the Fiction book collection.

	3. Search Results Section
		After performing a search, the results are displayed under the Search Results section.

		Example Results:
		The Boys of Riverside
		Author: Thomas Fuller
		Description: Displays book title and author for reference.
	4. Login button
		Library Staff can login to enter Admin page
		How to Use: Click this button to browse login page
B.)Login page
	1.Username
		Description: Allow user to input username
	2.Password
		Description: Allow user to input their password
	3. Login button
		Library Staff can login to enter Admin page
		How to Use: Click this button login into account with verify username & password
C.)Admin page (book.ejs)
	1. Welcome, <%= username %>
		Description: Displays a personalized welcome message with the username of the currently logged-in user.
	2. Logout
		Description: Logs the user out of the system and redirects them to the login page.
		How to Use: Click this button when you want to log out.
	Main Buttons
		1. Manage Books
		Description: Navigates to the main book management page, where you can view, search, edit, delete, or add books.
		How to Use: Click this button to access all book management features.
		2. Add New Book
		Description: Opens a form to add a new book to the library system.
		How to Use:
		Fill in the required details like title, author, year, genre, and ISBN.
		After entering the details, click the Add Book button to save the book.
		Genre Selection
			1. Select Genre
			Description: Lets you filter books based on their genre.
			Options:
				Fantasy: Displays only the books categorized under the Fantasy genre.
				Non-Fiction: Displays only the books categorized under the Non-Fiction genre.
				Fiction: Displays only the books categorized under the Fiction genre.
				How to Use: Select your desired genre to filter the book list displayed below.
	Search Books
		1. Search
		Description: Allows you to search for books by title, author, or other attributes.
		How to Use:
		Enter a keyword (e.g., book title, author) in the search bar.
	Click the Search button to display matching results.
	Current Books Section
		1. ALL Books (Displays the entire collection of books in the library, regardless of genre)
		2. Fantasy Books (Displays all books that belong to the Fantasy genre)
		3. Non-Fiction Books (Displays all books that belong to the Non-Fiction genre)
		4. Fiction Books (Displays all books that belong to the Fiction genre)
		How to Use: This section automatically updates based on the selected genre.
	Actions for books
	For each book displayed in the list, the following actions are available:
	
		1. Edit
		Description: Allows you to update the details of a book (e.g., title, author, year, genre, or ISBN).
		How to Use: Click the Edit button next to the book you want to modify. A form will appear where you can edit the book's details. Save your changes to update the book.
		2. Delete
		Description: Removes the book from the system.
		How to Use: Click the Delete button next to the book you want to remove. Confirm the deletion to delete the book permanently.
D.)searchResults.ejs
	Search results will be displayed
	Back to menu: Press the button to return to the main page.
