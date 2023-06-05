module.exports = app => {
    const recipes = require("../controllers/recipes.controller.js");

    var router = require("express").Router();

    // Create a new User
    router.post("/", recipes.create);

    // Retrieve all Users
    router.get("/", recipes.findAll);

    // Retrieve all published Users
    router.get("/published", recipes.findAllPublished);

    // Retrieve a single User with id
    router.get("/:id", recipes.findOne);

    // Update a User with id
    router.put("/:id", recipes.update);

    // Delete a User with id
    router.delete("/:id", recipes.delete);

    // Delete all Users
    router.delete("/", recipes.deleteAll);

    app.use('/api/recipes', router);
};
