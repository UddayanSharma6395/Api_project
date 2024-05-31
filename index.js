const express = require("express");


//Database
const database = require("./database");

//Initializing express
const myLib = express();

/*
Route         /
Description   Get all the books
Access        Public
Parameter     none
methods used  get

*/
myLib.get("/", (req, res) => {
    return res.json({books: database.books});
});


myLib.listen(4000,() => {
    console.log("Server is running on port 4000");

});
