const express = require('express');
const bcrypt = require('bcryptjs');
const generateToken = require('../midlleware/generate'); // Import generateToken function
const Authenticate = require('../midlleware/Authenticate');
const cookieParser = require('cookie-parser');
const router = express.Router();

require('../DB/connection');

const User = require('../Modles/UserSchema');

router.post('/signup', async (req, res) => {
    const { name, email, password, number } = req.body;

    if (!name || !email || !password || !number) {
        return res.status(400).json({ error: "Please Fill the Form" });
    }

    try {
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            return res.status(422).json({ error: "Email is Already Exists" });
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = new User({ name, email, password: hashedPassword, number });
            await user.save();
            return res.status(200).json({ message: "User Register Successfully" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post('/login',Authenticate, async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ error: "Please Fill the Form" });
        }

        const userlogin = await User.findOne({ email: email });
        if (!userlogin) {
            return res.status(400).json({ error: "Not login" });
        }

        const isPasswordValid = await bcrypt.compare(password, userlogin.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        // Generate JWT token upon successful login
        const token = generateToken({ email: userlogin.email, number: userlogin.number });

        // Set JWT token as a cookie in the response
        res.cookie("jwtoken", token ,  {
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true
          });
    
        return res.status(200).json({ message: "User login successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
