const express = require('express');
const dotenv = require('dotenv');
const app = express();

app.use(express.json());

dotenv.config({path:'./config.env'});

PORT = process.env.PORT;

require('./DB/connection')
app.use(require('./Router/auth'))



app.get('/' , (req , res) => {
    res.send("Home Page Bhai")
})

app.listen(PORT , () => {
    console.log(`Server is Listenng on ${PORT}`);
})