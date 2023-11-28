module.exports = app => {
    const recipes = require("../controllers/recipes.controller.js");

    var router = require("express").Router();

    // Create a new Recipe
    router.post("/", recipes.create);

    // Retrieve all Recipes
    router.get("/", recipes.findAll);

    // Retrieve all published Recipes
    router.get("/published", recipes.findAllPublished);

    // Retrieve a single Recipe with name
    router.post("/search", recipes.findByName);

    // Update a Recipe with id
    router.put("/:id", recipes.update);

    // Delete a Recipe with id
    router.delete("/:id", recipes.delete);

    // Delete all Recipes
    router.delete("/", recipes.deleteAll);

    app.use('/api/recipes', router);
};
