const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

// Load environment variables from .env file
dotenv.config({path:'./config.env'});

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS configuration for development environment
// Adjust "http://localhost:3000" to match your front-end's origin
app.use(cors({
  origin: 'http://localhost:3000', // Ensure this matches the client-side URL
  credentials: true, // This allows the server to accept credentials (cookies) from the client
}));

// Database connection
require('./DB/connection');

// Routes
app.use(require('./Router/auth'));

app.get('/', (req, res) => {
  res.send("Home Page Bhai");
});

// Fallback PORT if not specified in .env file
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
