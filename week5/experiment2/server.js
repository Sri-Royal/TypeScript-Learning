const express = require("express");

const app = express();

const PORT = 3000;

// Route parameter
app.get("/users/:id", (req, res) => {
    const userId = req.params.id;

    res.send(`User ID is: ${userId}`);
});

// Multiple route parameters
app.get("/products/:category/:id", (req, res) => {
    const category = req.params.category;
    const productId = req.params.id;

    res.send(`Category: ${category}, Product ID: ${productId}`);
});

// Query parameters
app.get("/search", (req, res) => {
    const name = req.query.name;
    const age = req.query.age;

    res.send(`Name: ${name}, Age: ${age}`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});