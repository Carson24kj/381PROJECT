# Library Management System

## Project Overview
This project is a library management website designed to help library administrators and readers better manage and find library resources. The system includes the following main features:

1. Book catalog search and browsing
2. User account management
3. Book borrowing and return
4. Library inventory statistics and reporting

## Project File Overview
The project contains the following main files and directories:

1. **models**: Stores data models, such as books, users, and other relevant entities.
2. **public**: Contains front-end static resources, such as CSS, JavaScript, and images.
3. **views**: Holds server-side rendered HTML template files.
4. **controllers**: Includes files that handle user requests and business logic.
5. **routes**: Defines the application's routing.
6. **app.js**: The main entry point of the application, where the server, middleware, and routes are defined.
7. **package.json**: Records project dependencies and script commands.

## Deployment URL
The library management system is deployed on the Render platform and can be accessed at the following URL:

[https://three81project-rddj.onrender.com](https://three81project-rddj.onrender.com)

## Usage Guide

### Local Development
1. Clone the repository:
   ```
   git clone https://github.com/your-username/library-management-system.git
   ```
2. Navigate to the project directory:
   ```
   cd library-management-system
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open your web browser and visit `http://localhost:3000` to view the application.

### Deployment
The application is automatically deployed to Render when changes are pushed to the repository. To deploy the application manually, follow these steps:

1. Create a Render account or log in to your existing account.
2. Create a new Web Service and connect it to your GitHub repository.
3. Configure the service settings, such as the runtime environment, environment variables, and build command.
4. Deploy the application.

For more detailed instructions, please refer to the [Render documentation](https://docs.render.com/).
