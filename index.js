const express = require('express');
require('dotenv/config');

const recipes = require('./use-cases/recipes');

const app = express();
app.use(express.json());

app.get('/recipes', async (req, res) => {
    try {
        res.send(recipes.getRecipes(req.query.i));
    } catch (err) {
        res.status(500).send(err);
    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
