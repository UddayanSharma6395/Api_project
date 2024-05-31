const books= [
    {
        ISBN: "12345Book",
        title: "Tesla Book",
        pubDate: "2021-08-05",
        language: "en",
        numPage: 250,
        author: [1,2],
        publication: [1],
        category: ["Tech", "Space", "Education"]
    }
];

const authors = [
    {
        id: 1,
        name: "John",
        books: ["12345Book", "secretBook"],

    },
    {
        id: 2,
        name: "Elon Musk",
        books: ["12345Book"],
    }
];

const publications = [
    {
        id: 1,
        name: "Writex",
        books: ["12345Book"]
    }
];

module.exports = {books,authors,publications};