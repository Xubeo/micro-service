const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let categories = [
  { id: 1, name: "Catégorie 1" },
  { id: 2, name: "Catégorie 2" },
  { id: 3, name: "Catégorie 3" },
  { id: 4, name: "Catégorie 4" },
  { id: 5, name: "Catégorie 5" },
];

app.get("/categories", async (req, res) => {
  res.json(categories);
});

app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const category = categories.find(category => category.id === id);

    if (category) {
        res.json(category)
    } else {
        res.status(404).json({error: 'Catégorie non trouvé'});
    }
})

app.listen(5000, () => {
    console.log("Microservice de gestion des catégories démarré sur le port 5000");
})