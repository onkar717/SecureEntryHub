const express = require('express');
const bcrypt = require('bcryptjs');
const Authenticate = require('../midlleware/Authenticate');
const cookieParser = require('cookie-parser');
const router = express.Router();

require('../DB/connection');
router.use(cookieParser())

const User = require('../Modles/UserSchema');

router.post('/signup', async (req, res) => {
    const { name, email, password, number , age } = req.body;

    if (!name || !email || !password || !number || !age) {
        return res.status(400).json({ error: "Please Fill the Form" });
    }

    try {
        const userExists = await User.findOne({ email: email });
        if (userExists) {
                return res.status(422).json({ error: "Email is Already Exists" });
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = new User({ name, email, password: hashedPassword, number , age});
            await user.save();
            return res.status(200).json({ message: "User Register Successfully" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//
router.post('/login' , async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ error: "Please Fill the Form" });
        }

        const userlogin = await User.findOne({ email: email });
        if (!userlogin) {
            return res.status(400).json({ error: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, userlogin.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        // Generate JWT token upon successful login
        const token = await userlogin.generateToken();
        console.log("generated token " + token);

        // Set JWT token as a cookie in the response
        res.cookie("jwtoken", token, {
            expires: new Date(Date.now() + 25892000000), // Example expiration time
            httpOnly: true
        });

        return res.status(200).json({ message: "User login successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
router.get('/about', Authenticate ,(req,res) => {
    console.log('hello my about');
    res.send(req.rootuser)  
  })
  
// logout ka page 
router.get('/logout', (req, res) => {
    res.clearCookie('jwtoken', { path: '/' });
    res.status(200).send("User Logout");
  });
  
  

module.exports = router;
