# JotSpot Backend API

Welcome to the backend API documentation for JotSpot - a simple web application for jotting down your thoughts and tasks. This documentation provides an overview of the backend server codebase, its structure, and how to run it locally.

## Overview

This backend API is built using Node.js with Express.js framework for handling HTTP requests and MongoDB for database storage. It provides endpoints for creating, reading, updating, and deleting jots.

## Getting Started

To get started with the JotSpot backend API, follow these steps:

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your machine. Also, you need to have MongoDB installed and running locally or a MongoDB Atlas account to connect to a cloud-hosted MongoDB database.

Get the latest LTS version of NodeJS from [here](https://nodejs.org/).<br>
Get MongoDB community edition from [here](https://www.mongodb.com/docs/manual/administration/install-community/).

### Installation

1. Clone this repository to your local machine.

git clone <repository-url>

2. Navigate to the project directory.

cd <project-directory>

3. Install dependencies.

npm install

### Configuration

1. Create a `.env` file in the root directory of your project.
2. Add your MongoDB connection URI to the `.env` file as follows:

MONGO_URI=your_mongodb_connection_uri

### Running the Application

Once you've installed the dependencies and configured the MongoDB URI, you can run the application locally.

npm start

This command starts the server and listens for incoming HTTP requests.

## Endpoints

### 1. GET /jots

- Retrieves all jots from the database.

### 2. POST /jots/new

- Creates a new jot with the provided text.

### 3. DELETE /jots/delete/:id

- Deletes the jot with the specified ID.

### 4. PUT /jots/complete/:id

- Toggles the completion status of the jot with the specified ID.

## Folder Structure

The folder structure of the backend server is as follows:

- `models/`: Contains MongoDB schema definitions.
- `server.js`: Entry point of the application.
- `package.json`: Contains metadata and dependencies.

## Dependencies

- Express.js: Web application framework for Node.js.
- Mongoose: MongoDB object modeling tool.
- dotenv: Loads environment variables from a .env file.

## Scripts

- `npm start`: Starts the server.

## Contributing

Contributions to the JotSpot backend API are welcome! Please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the ISC License.