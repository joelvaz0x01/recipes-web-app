const db = require("../models");
const Recipe = db.recipe;
const Op = db.Sequelize.Op;

// Create and Save a new Recipe
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name_recipe || !req.body.description) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Recipe
    const recipe = {
        name_recipe: req.body.name_recipe,
        description: req.body.description
    };

    // Save Recipe in the database
    Recipe.create(recipe)
        .then(data => {
            res.send(data);
            console.log(data);
        }
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Recipe."
            });
            console.log(err);
        }
        );
}

// Retrieve all Recipes from the database.
exports.findAll = (req, res) => {
    const name_recipe = req.query.name_recipe;
    var condition = name_recipe ? { name_recipe: { [Op.like]: `%${name_recipe}%` } } : null;

    Recipe.findAll({ where: condition })
        .then(data => {
            res.send(data);
            console.log(data);
        }
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving recipes."
            });
            console.log(err);
        }
        );
}

// Find a single Recipe with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Recipe.findByPk(id)
        .then(data => {
            res.send(data);
            console.log(data);
        }
        )
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Recipe with id=" + id
            });
            console.log(err);
        }
        );
}

// Update a Recipe by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Recipe.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Recipe was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Recipe with id=${id}. Maybe Recipe was not found or req.body is empty!`
                });
            }
        }
        )
        .catch(err => {
            res.status(500).send({
                message: "Error updating Recipe with id=" + id
            });
            console.log(err);
        }
        );
}

// Delete a Recipe with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Recipe.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Recipe was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Recipe with id=${id}. Maybe Recipe was not found!`
                });
            }
        }
        )
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Recipe with id=" + id
            });
            console.log(err);
        }
        );
}

// Delete all Recipes from the database.
exports.deleteAll = (req, res) => {
    Recipe.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Recipes were deleted successfully!` });
        }
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Recipes."
            });
            console.log(err);
        }
        );
}

// Find all published Recipes
exports.findAllPublished = (req, res) => {
    Recipe.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
            console.log(data);
        }
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving recipes."
            });
            console.log(err);
        }
        );
}
