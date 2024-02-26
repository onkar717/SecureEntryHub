const jwt = require('jsonwebtoken');

// Secret key for JWT signing and verification
const secretKey = 'yourSecretKey'; // Same secret key used for token generation

// Sample JWT token (replace this with the token you want to verify)
const token = 'yourJWTToken';

// Verify JWT token
jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
        console.error('JWT verification failed:', err.message);
    } else {
        console.log('Decoded JWT payload:', decoded);
    }
});
