const express = require("express");
const morgan = require("morgan");
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()

// db, in the second parameter, values are given to get rid of the deprecation warnings
// MONGO_URI=mongodb://localhost/nodeapi 
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log("DB is Connected"));
// to get error
mongoose.connection.on('error', err => {
    console.log(`Bd connection error: ${err.message}`);
});

// bring in routes, getPosts works as a middleware
const getPosts = require("./routes/post.js")
const myMiddleWare = (req, resp, next) => {
    console.log("My middle ware applied");
    next();
}

//middleware
app.use(morgan("dev"))
// app.use(myMiddleWare)
// use instead of app.get as we are using express router
app.use("/", getPosts);

// app.get("/", getPosts);

const port = process.env.PORT 
app.listen(port, () => {
    console.log(`Listening to port: ${port}`);
});