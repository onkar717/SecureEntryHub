const jwt = require('jsonwebtoken')
const User = require('../Modles/UserSchema')

const Authenticate = async (req , res , next) => {
    try {
        const token = req.cookies.jwtoken ;
        console.log(`token ahe ka nahi bhag ${token}`);
        const verifyToken = jwt.verify(token, process.env.SECRETE_KEY);
        console.log(`Verify hoat ahe ka bhag token ${verifyToken}`);
        const rootuser = await User.findOne({_id:verifyToken._id , "tokens.token":token})
        console.log(`Root user Check kar shemnya ${rootuser}`);
        if (!rootuser) {throw new Error('User not Found')}
        req.token = token;
        req.rootuser = rootuser;
        req.userId = rootuser._id;

        next();
    } catch (error) {
        res.status(401).send('Unauthoraized ye re   ')
        console.log(error);
    }
}

module.exports = Authenticate