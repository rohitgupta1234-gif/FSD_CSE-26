const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static("."));

let products = [];

// POST - Add a product
app.post("/products", (req, res) => {
    products.push(req.body);
    res.send("Product Added Successfully");
});

// GET - Get all products
app.get("/products", (req, res) => {
    res.json(products);
});

// Start server
app.listen(3011, () => {
    console.log("Server running on port 3011");
});