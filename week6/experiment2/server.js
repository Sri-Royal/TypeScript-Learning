const express = require("express");

const app = express();

const PORT = 3000;

// Middleware to read JSON data
app.use(express.json());

// Temporary data
let users = [
    {
        id: 1,
        name: "Srilakshmi",
        age: 19
    },
    {
        id: 2,
        name: "Rahul",
        age: 20
    }
];

// ------------------------------------
// GET - Get all users
// ------------------------------------
app.get("/users", (req, res) => {
    res.json(users);
});

// ------------------------------------
// GET - Dynamic URL
// Example: /users/1
// ------------------------------------
app.get("/users/:id", (req, res) => {

    const id = Number(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json(user);
});

// ------------------------------------
// POST - Create a new user
// ------------------------------------
app.post("/users", (req, res) => {

    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age
    };

    users.push(newUser);

    res.status(201).json({
        message: "User created successfully",
        data: newUser
    });
});

// ------------------------------------
// PUT - Update a user
// Dynamic URL: /users/:id
// ------------------------------------
app.put("/users/:id", (req, res) => {

    const id = Number(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    user.name = req.body.name;
    user.age = req.body.age;

    res.json({
        message: "User updated successfully",
        data: user
    });
});

// ------------------------------------
// DELETE - Delete a user
// Dynamic URL: /users/:id
// ------------------------------------
app.delete("/users/:id", (req, res) => {

    const id = Number(req.params.id);

    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const deletedUser = users.splice(userIndex, 1);

    res.json({
        message: "User deleted successfully",
        data: deletedUser[0]
    });
});

// ------------------------------------
// Start server
// ------------------------------------
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});