# Cointab SE-ASSIGNMENT server

### Cointab Server is a Node.js server application for managing users and posts data using a SQL database. It provides RESTful API endpoints to perform CRUD operations on users and posts.

## Table of Contents

-  [Getting Started](#getting-started)
   -  [Prerequisites](#prerequisites)
   -  [Installation](#installation)
   -  [Configuration](#configuration)
-  [Usage](#usage)
-  [Endpoints](#endpoints)
-  [Application](#application)
-  [Contributing](#contributing)
-  [License](#license)

## Getting Started

Welcome to the Cointab SE-ASSIGNMENT server! This section will guide you through the process of setting up and using the project.

### Prerequisites

Before you begin, ensure you have the following prerequisites installed:

-  [Node](https://nodejs.org/en)
-  [SQL Database](https://www.mysql.com/downloads/)

### Installation

Follow these steps to install and run the project:

1. Clone the repository:

   ```bash
   git clone https://github.com/AshiqurRahaman02/cointab-server.git
   ```

2. Navigate to the project directory:

   ```bash
   cd cointab-server
   ```

3. Set up your environment variables by creating a `.env` file in the root directory. Example content:

   ```bash
   sqlUserName=
   sqlPassword=
   sqlServer=
   sqlPort=
   sqlDatabase=

   connectionString=

   PORT = // server port

   ```

4. Install the packages:

   ```bash
   npm i
   ```

5. Start your server:

   ```bash
   npm run server
   ```

### Configuration

Before running the application, make sure to configure the necessary environment variables in the `.env` file.

## Usage

To use the project, follow these steps:

1. Add a user's posts:

   ```bash
   curl -X POST -d '{"userId": number, "posts": []}' http://localhost:5151/posts/add/posts/
   ```

2. Check user's posts exist or not:

   ```bash
   curl -X GET http://localhost:5151/posts/get/posts?user_id={userId}
   ```

3. Add a user:

   ```bash
   curl -X POST -d '{"user_id": number, "name": string, "email": string}' http://localhost:5151/users/add/user/
   ```

4. Get a user using the query string:

   ```bash
   curl -X GET http://localhost:5151/users/get/user?user_id={userId}
   ```

5. Get a list of all users:

   ```bash
   curl -X GET http://localhost:5151/users/get/users/
   ```

For more details on each endpoint and additional options, refer to the [Endpoints](#endpoints) section.

## Endpoints

Document the available API endpoints and their functionality.

-  **Add User's Posts**
   -  **Endpoint:** `POST /posts/add/posts/`
   -  **Description:** Add a user's posts.
   -  **Request:**
      -  **Example:**
         ```json
         {
         	"userId": 1,
         	"posts": [{ "title": "sunt", "body": "quia" }]
         }
         ```
      -  **Parameters:**
         -  `userId` (required).
         -  `title` (required).
         -  `body` (required).
   -  **Response:**
      -  **Example:**
         ```json
         {
         	"isError": false,
         	"message": "Posts added successfully"
         }
         ```
      -  **Response Properties:**
         -  `201 OK`
         -  `isError`: A boolean indicating the error of the operation.
         -  `message`: The response message.
   -  **Error Responses:**
      -  `400 Bad Request`: If the user's posts already exist.
      -  `500 Internal Server Error`: If there is an internal error during adding the user's posts.
   -  **Usage:**
      ```bash
      curl -X POST -H "Content-Type: application/json" -d '{"userId": number, "posts": []}' http://localhost:5151/posts/add/posts/
      ```
   -  **Notes:**
      -  Ensure that the all-environment variable is set before making the request.

---

-  **Check user's posts**
   -  **Endpoint:** `GET /posts/add/posts?user_id=1`
   -  **Description:** Check user's posts exist or not.
   -  **Request:**
      -  **Example:**
         ```json
         // No request body required
         ```
   -  **Response:**
      -  **Example:**
         ```json
         {
         	"isError": false,
         	"message": "User posts exists"
         }
         ```
      -  **Response Properties:**
         -  `200 OK`
         -  `isError`: A boolean indicating the error of the operation.
         -  `message`: The response message.
   -  **Error Responses:**
      -  `500 Internal Server Error`: If there is an internal error during the task.
   -  **Usage:**
      ```bash
      curl http://localhost:5151/posts/check/posts?user_id={userId}
      ```
   -  **Notes:**
      -  Ensure that the all-environment variable is set before making the request.

---

-  **Add a User**
   -  **Endpoint:** `POST /users/add/user/`
   -  **Description:** Add a user to the database.
   -  **Request:**
      -  **Example:**
         ```json
         {
         	"user_id": 1,
         	"name": "Ashiqur Rahaman",
         	"email": "ashiqur999999@gmail.com"
         }
         ```
      -  **Parameters:**
         -  `user_id` (required).
         -  `name` (required).
         -  `email` (required).
   -  **Response:**
      -  **Example:**
         ```json
         {
             "isError": false,
             "message": "User added successfully",
             "newUser": newUser,
         }
         ```
      -  **Response Properties:**
         -  `201 OK`
         -  `isError`: A boolean indicating the error of the operation.
         -  `newUser: The newly created user.
   -  **Error Responses:**
      -  `409 Bad Request`: If the user already exists.
      -  `500 Internal Server Error`: If there is an internal error during adding the users.
   -  **Usage:**
      ```bash
      curl -X POST -H "Content-Type: application/json" -d '{"user_id": number, "name": string, "email": string}' http://localhost:5151/users/add/user/
      ```
   -  **Notes:**
      -  Ensure that the all-environment variable is set before making the request.

---

-  **Check a single-user**
   -  **Endpoint:** `GET /users/get/user?user_id=1`
   -  **Description:** Get a user using the query string.
   -  **Request:**
      -  **Example:**
         ```json
         // No request body required
         ```
   -  **Response:**
      -  **Example:**
         ```json
         {
         	"isError": false,
         	"message": "User already exists"
         }
         ```
      -  **Response Properties:**
         -  `200 OK`
         -  `isError`: A boolean indicating the error of the operation.
         -  `message`: The response message.
   -  **Error Responses:**
      -  `500 Internal Server Error`: If there is an internal error during the task.
   -  **Usage:**
      ```bash
      curl http://localhost:5151/users/get/user?user_id={userId}
      ```
   -  **Notes:**
      -  Ensure that the all-environment variable is set before making the request.

---

-  **Get all users**
   -  **Endpoint:** `GET /users/get/users/`
   -  **Description:** Get a user using the query string.
   -  **Request:**
      -  **Example:**
         ```json
         // No request body required
         ```
   -  **Response:**
      -  **Example:**
         ```json
         {
         	"isError": false,
         	"users": [
         		{
         			"user_id": 3,
         			"name": "Clementine Bauch",
         			"email": "Nathan@yesenia.net",
         			"createdAt": "2024-02-24T15:05:19.567Z",
         			"updatedAt": "2024-02-24T15:05:19.567Z"
         		},...
         	]
         }
         ```
      -  **Response Properties:**
         -  `200 OK`
         -  `isError`: A boolean indicating the error of the operation.
         -  `users`: An array of users available in the database.
            -  `user_id`: The user's id.
            -  `name`: The user's name.
            -  `email`: The user's email.
            -  `createdAt`: The timestamp of when the user was created.
            -  `updatedAt`: The timestamp of when the user was updated.
   -  **Error Responses:**
      -  `500 Internal Server Error`: If there is an internal error during the task.
   -  **Usage:**
      ```bash
      curl http://localhost:5151/users/get/users/
      ```
   -  **Notes:**
      -  Ensure that the all-environment variable is set before making the request.

---

## Application

To use the cointab application you need to read the configuration at [cointab](https://github.com/AshiqurRahaman02/cointab.git)

## Contributing

Thank you for considering contributing to our project! Whether you're reporting a bug, proposing a feature, or submitting code changes, your contributions are highly appreciated.

## Issues

If you find a bug, have a question, or want to propose a new feature, check our issue tracker for existing topics. If not found, feel free to open a new issue and provide details such as a clear title, steps to reproduce, and your environment.

## Feature Requests

Have a feature in mind? We welcome new ideas and enhancements. Open an issue on our GitHub repository to discuss and share your thoughts with the community.

## Pull Requests

Contributions through pull requests are welcome. To contribute:

1. Fork the repository.

2. Create a new branch for your changes: git checkout -b feature/your-feature.

3. Make changes following our coding standards.

4. Push changes to your fork: git push origin feature/your-feature.

5. Open a pull request on GitHub with a clear description of your changes.

## Coding Standards

-  **Indentation and Formatting:**

   1. Use tabs for indentation.
   2. Follow the standard React formatting guidelines. You can use the Prettier extension to automatically format your code.
   3. Variable Naming:

-  **Variable Naming**

   1. Use meaningful and descriptive names for variables.
   2. Follow the camelCase naming convention for variables.

-  **Function Naming:**

   1. Use camelCase for function names.
   2. Choose function names that indicate their purpose.

-  **Comments:**

   1. Include comments to explain complex sections of code or to provide context.
   2. Write clear and concise comments.

-  **Error Handling:**

   1. Properly handle errors using the if err != nil pattern.
   2. Avoid generic error messages; provide specific details when handling errors.

-  **Testing:**

   1. Write comprehensive unit tests for your code.
   2. Ensure that tests cover different scenarios and edge cases.

-  **Documentation:**

   1. Provide documentation for public functions and packages.
   2. Use GoDoc-style comments for documenting functions and packages.

-  **Imports:**

   1. Group imports into standard library packages, third-party packages, and local packages.
   2. Avoid unused imports.

-  **Concurrency and Goroutines:**

   1. Use goroutines and channels responsibly.
   2. Ensure proper synchronization to avoid race conditions.

-  **Code Modularity:**

   1. Encapsulate functionality into modular functions and packages.
   2. Aim for a clear separation of concerns.

-  **Security:**

   1. Follow security best practices, especially when dealing with user input.
   2. Be mindful of potential vulnerabilities and address them promptly.

-  **Version Control:**

   1. Make small, meaningful commits with clear commit messages.
   2. Avoid committing large binary files or sensitive information.

## Getting Help

For questions or assistance, open an issue or join community discussions.

##

```
Thank you for contributing! Feel free to customize it based on your project's specifics.
```
