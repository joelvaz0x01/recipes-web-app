module.exports = app => {
    const users = require("../controllers/user.controller.js");

    var router = require("express").Router();

    // Login a User
    router.post("/", users.login);

    // Register a new User
    router.post("/register", users.register);

    // Retrieve all Users
    router.get("/", users.findAll);

    // Retrieve a single User with id
    router.get("/:id", users.findOne);

    // Update a User with id
    router.put("/:id", users.update);

    // Delete a User with id
    router.delete("/:id", users.delete);

    // Delete all Users
    router.delete("/", users.deleteAll);

    // Check if user is admin
    router.get("/admin/:id", users.isAdmin);

    app.use('/api/users', router);
};
