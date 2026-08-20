const express = require("express");

const app = express();

const PORT = 3000;

// Middleware to read JSON data
app.use(express.json());

// GET request - server sends JSON
app.get("/users", (req, res) => {
    res.json({
        message: "GET request successful",
        data: {
            name: "Srilakshmi",
            age: 19,
            course: "B.Tech CSE AI & ML"
        }
    });
});

// POST request - client sends JSON
app.post("/users", (req, res) => {
    const user = req.body;

    res.json({
        message: "POST request successful",
        receivedData: user
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});