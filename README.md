# FOODIE

This app allows users to view a list of recipes, and see the full details of a recipe including the preparation steps.

The app is built using MERN Stack (MongoDB, Express.js, React.js, Node.js) and user authentication is implemented.

Only logged-in users are able to access the list of recipes and view the full details of a recipe. Users can register themselves to gain access to the recipe list.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

- Node.js >= 18.12.1
- NPM >= 8.19.2
- MongoDB

## Installation

1. Clone the repository

        $ git clone https://github.com/OverloadedSam/recipe-app.git

2. Go to `frontend` and `backend` directory one by one and install dependencies with command shown at 3rd step.

        $ cd frontend/
        // And
        $ cd backend/

3. Install the dependencies


    $ npm install

## Configure App

You have to set the environment variables of your configuration before starting the app.

### 1. Environment variables for `frontend`

Create a `.env` file at `recipe-app/frontend/` directory and set the following environment variables starting with prefix `VITE_`

    VITE_BASE_URL={api_url_of_the_backend} // e.g: http://localhost:8000/api

### 2. Environment variables for `backend`

Create a `.env` file at `recipe-app/backend/` directory and set the following environment variables.

    PORT=8000 // You can set any port number that is available but make sure to correctly include it in frontend environment variables.
    ORIGIN={your_frontend_origin} // e.g: http://localhost:3000
    BASE_API_URL=/api

    DB_NAME={mongodb_database_name}
    DB_CONNECTION_STRING={your_mongodb_connection_uri}
    SECRET={secret_for_jwt} // e.g: shhhhh
    SALT={salt_to_hash_passwords} // Recommended: 10

### 3. Seed the database with mock/sample data.

For populating the database with sample data, please use the following command to seed the database

    $ cd recipe-app/backend // go to backend directory.
    $ node seed.js

## Running The Project

### Start backend (Node API)

    $ cd recipe-app/backend // go to backend directory
    $ npm run dev // run backend with hot reloading.
    // or you can run the backend with standard command
    $ node server.js

### Start Frontend (React app [VITE])

    $ cd recipe-app/frontend // go to frontend directory
    $ npm run dev

## Deployment

The app can be deployed to a hosting platform such as Render or Heroku.

## Built With

- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
