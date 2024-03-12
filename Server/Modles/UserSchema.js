const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRETE_KEY; // Secret key for JWT signing and verification

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String, // Add token field to store JWT token
        required: true
      }
    }
  ],
});
// generate token
userSchema.methods.generateToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, secretKey);
    this.tokens = this.tokens.concat({token: token});
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

const User = mongoose.model("USER", userSchema);
module.exports = User;
