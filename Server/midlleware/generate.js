const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRETE_KEY; // Secret key for JWT signing and verification

const generateToken = (payload) => {
    return jwt.sign(payload, secretKey, { expiresIn: '365d' });
};

module.exports = generateToken;
