const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');
const userRoutes = require('./routes/users');
const recipeRoutes = require('./routes/recipes');

/* CONFIGURATION */
const server = express();
dotenv.config();
server.use(express.json());
server.use(helmet());
server.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
server.use(morgan('common'));
connectDB();

/* ROUTES */
const baseUrl = process.env.BASE_API_URL;
server.use(baseUrl, userRoutes);
server.use(baseUrl, recipeRoutes);

/* CUSTOM ERROR HANDLER */
server.use(errorHandler);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`SERVER IS LISTENING AT PORT ${PORT}...`);
});
