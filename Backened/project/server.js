const express = require('express');

const app = express();

// Student data
let student = [
   { id: 1, name: "Rahul", branch: "CSE" },
   { id: 2, name: "Aman", branch: "IT" }
];

// Get route
app.get('/students', (req, res) => {
    res.json(student);
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});