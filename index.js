const express = require("express");


//Database
const database = require("./database");

//Initializing express
const booky = express();

/*
Route         /
Description   Get all the books
Access        Public
Parameter     none
methods used  get

*/
booky.get("/", (req, res) => {
    return res.json({books: database.books});
});


/*
Route         /is
Description   Get specific book on ISBN
Access        Public
Parameter     ISBN
methods used  get

*/
booky.get("/is/:isbn", (req,res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.ISBN === req.params.isbn
    );

    if (getSpecificBook.length === 0)
        {
            return res.json({error: `No book found for the ISBN ${req.params.isbn}`})
        }
    return(res.json({book: getSpecificBook}));
});


/*
Route         /c
Description   Get specific book of category
Access        Public
Parameter     category
methods used  get

*/
booky.get("/c/:category",(req,res) =>{
    const getBookCategory = database.books.filter(
        (book) => book.category.includes(req.params.category)
    );
    if(getBookCategory.length===0)
    {
        return res.json({Error: `No book found for the category of ${req.params.category}`})   
    }        
    return(res.json({book: getBookCategory}));
});



/*
Route         /l
Description   Get specific book based on language
Access        Public
Parameter     language
methods used  get

*/
booky.get("/l/:language",(req,res) =>{
    const getBookLanguage = database.books.filter(
        (book) => book.language.includes(req.params.language)
    );
    if(getBookLanguage.length===0)
    {
        return res.json({Error: `No book found in language ${req.params.language}`})   
    }        
    return(res.json({book: getBookLanguage}));
});

/*
Route         /author
Description   Get all author
Access        Public
Parameter     author name
methods used  get

*/
booky.get("/author", (req, res) => {
    return res.json({authors: database.authors});
});

/*
Route         /author/
Description   Get specific author by id
Access        Public
Parameter     author id
methods used  get

*/


booky.get("/author/:id", (req, res) => {
    const getSpecificAuthor=database.authors.filter(
        (authors) => (authors.id==req.params.id)
    );
    if(getSpecificAuthor.length===0)
        {
            return res.json({error: `No author found for the id ${req.params.id}`});
        }
    return res.json({authors: getSpecificAuthor});
});

/*
Route         /author/book
Description   Get specific author by id
Access        Public
Parameter     author id
methods used  get

*/


booky.get("/author/book/:isbm", (req, res) => {
    const getSpecificAuthor=database.authors.filter(
        (authors) => (authors.isbn==req.params.isbn)
    );
    if(getSpecificAuthor.length===0)
        {
            return res.json({error: `No author found for the isbn ${req.params.isbn}`});
        }
    return res.json({authors: getSpecificAuthor});
});

/*
Route         /publisher
Description   Get all publications
Access        Public
Parameter     n/a
methods used  get

*/
booky.get("/publications", (req, res) => {
    return res.json({publications: database.publications});
});



booky.listen(4000,() => {
    console.log("Server is running on port 4000");

});
