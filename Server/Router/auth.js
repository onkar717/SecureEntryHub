const express = require('express')

const router = express.Router();

require('../DB/connection')

const User = require('../Modles/UserSchema')

router.get('/about' , (req , res) => {
    res.send('Priya about is working priya')
    console.log("yes about bhai");
})


router.post('/register' , async (req,res) => {
    const {name , email , password} = req.body;
    // console.log(name , email , password);
    // const user = User

    if ( !name || !email || !password) {
        return res.status(400).json({error:"Please Fill the Form"});
    }
    try {
        const userexists = await User.findOne({email : email})
        if (userexists) {
            return res.status(422).json({error:"Email is Already Exists"})
        }
        else{
            const user = new User({name , email , password})
            user.save();
            return res.status(200).json({message:"User Register Successfully"})
        }
    } catch (error) {
        console.log(error);
    }
})

router.post('/singup', async (req,res) => {
    const {email , password} = req.body;

    try {
        if (!email || !password) {
            res.status(400).json({error:"Please Fill the Form"})
        }
        const userlogin = await User.findOne({email : email});
        if (!userlogin) {
            res.status(400).json({error : "Not login"})
        }
        else{
            res.status(200).json({message :"user login sucesfully"})
        }
    } catch (error) {
     console.log(error);   
    }


})



module.exports = router;