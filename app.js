const express = require('express');

console.log(`env: ${process.env.NODE_ENV}`);

require('dotenv').config({  
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
});

const recipes = require('./use-cases/recipes');

const app = express();
app.use(express.json());

app.get('/recipes', async (req, res) => {
    try {
        res.send(await recipes.getRecipes(req.query.i));
    } catch (err) {
        res.status(err.type || 500).send(err.message);
    }
});

const port = process.env.PORT;

app.listen(port, () => console.log(`Listening on port ${port}`));
