const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let authors = [
  { id: 1, name: "Auteur 1" },
  { id: 2, name: "Auteur 2" },
  { id: 3, name: "Auteur 3" },
  { id: 4, name: "Auteur 4" },
  { id: 5, name: "Auteur 5" },
];

app.get("/authors", async (req, res) => {
  res.json(authors);
});

app.get("/authors/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const author = authors.find((author) => author.id === id);

  if (author) {
    res.json(author);
  } else {
    res.status(404).json({ error: "Auteur non trouvé" });
  }
});

app.delete('/author/delete/:id', async(req,res) => {
  res.send(JSON.stringify(deleteAuthors(req.params.id))); 
})

app.listen(4000, () => {
  console.log("Microservice de gestion des auteurs démarré sur le port 4000");
});

const deleteAuthors = async (id) => {
  await fetch(`http://book_service:4400/book/eventBook/${id}`);
  deleteAuthors();
  return authors;
};
