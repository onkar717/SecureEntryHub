const mongoose = require('mongoose');


const DB = process.env.DATABASE;

mongoose.connect(DB , ({
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopo   logy: true,
    // useFindAndModify: false
})).then(() => {
    console.log("Connection Successfull")
}).catch((err) => {
    console.log("Error Mongo" , err);
})