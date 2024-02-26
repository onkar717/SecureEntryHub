const jwt = require('jsonwebtoken');

// Secret key for JWT signing and verification
const secretKey = process.env.SECRETE_KEY; // Change this to your own secret key

// Sample user data
const user = {
    id: 123,
    username: 'example_user'
};

// Generate JWT token
const token = jwt.sign(user, secretKey, { expiresIn: '365d' }); // Expires in 1 hour
console.log('Generated JWT token:', token); 
