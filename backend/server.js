const express = require("express");
const path = require("path");
const server = express();
const PORT = 3000;

// Bodyparser
server.use(express.json());

// Static dir with relative path
server.use(express.static(path.join(__dirname, "../public")));

// Default home
server.get("/", (req, res) => {
    res.send("La bomba");
    // res.sendFile(path.join(__dirname, "../public", "index.html"
    // ));
});

// He he llo
server.get("/hello", (req, res) => {
    res.json({ msg: "Hello world" });
});

// Echo echo echo echo ...
server.get("/echo/:id", (req, res) => {
    res.json({ id: req.params.id });
});

// Summarum https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
server.post("/sum", (req, res) => {
    res.json({ sum: req.body.numbers.reduce((part, acc) => part + acc, 0) });
});

let recvWords = [];

// Save words
server.post("/list", (req, res) => {
    // Extract text from body
    const { text } = req.body;
    if (text) {
        recvWords.push(text);
        res.status(200).json({ list: recvWords });
    }
});

// Listen here
server.listen(PORT, () => {
    console.log(`Server Listening on port: ${PORT}`);
});


