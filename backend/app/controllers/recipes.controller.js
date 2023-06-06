const db = require("../models");
const Recipe = db.recipe;

// Create and Save a new Recipe
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Recipe
    const recipe = new Recipe({
        name: req.body.name,
        description: req.body.description,
        instructions: req.body.instructions,
        published: req.body.published ? req.body.published : false
    });

    // Save Recipe in the database
    recipe
        .save(recipe)
        .then(data => {
            res.send(data);
        }
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Recipe."
            });
        }
        );
};

// Retrieve all Recipes from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

    Recipe.find(condition)
        .then(data => {
            res.send(data);
        }
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving recipes."
            });
        }
        );
}

// Find a single Recipe with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Recipe.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Recipe with id " + id });
            else res.send(data);
        }
        )
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Recipe with id=" + id });
        }
        );
};

// Update a Recipe by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        }
        );
    }

    const id = req.params.id;

    Recipe.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Recipe with id=${id}. Maybe Recipe was not found!`
                }
                );
            } else res.send({ message: "Recipe was updated successfully." });
        }
        )
        .catch(err => {
            res.status(500).send({
                message: "Error updating Recipe with id=" + id
            }
            );
        }
        );
};

// Delete a Recipe with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Recipe.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Recipe with id=${id}. Maybe Recipe was not found!`
                }
                );
            } else {
                res.send({
                    message: "Recipe was deleted successfully!"
                }
                );
            }
        }
        )
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Recipe with id=" + id
            }
            );
        }
        );
};

// Delete all Recipes from the database.
exports.deleteAll = (req, res) => {
    Recipe.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Recipes were deleted successfully!`
            }
            );
        }
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all recipes."
            }
            );
        }
        );
}

// Find all published Recipes
exports.findAllPublished = (req, res) => {
    Recipe.find({ published: true })
        .then(data => {
            res.send(data);
        }
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving recipes."
            }
            );
        }
        );
}

// Find all unpublished Recipes
exports.findAllUnpublished = (req, res) => {
    Recipe.find({ published: false })
        .then(data => {
            res.send(data);
        }
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving recipes."
            }
            );
        }
        );
}

// Find all Recipes with a name containing 'name'
exports.findAllByName = (req, res) => {
    const name = req.params.name;

    Recipe.find({ name: { $regex: name, $options: "i" } })
        .then(data => {
            res.send(data);
        }
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving recipes."
            }
            );
        }
        );
}

// Find all Recipes with a description containing 'description'
exports.findAllByDescription = (req, res) => {
    const description = req.params.description;

    Recipe.find({ description: { $regex: description, $options: "i" } })
        .then(data => {
            res.send(data);
        }
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving recipes."
            }
            );
        }
        );
}

// Find all Recipes with an instruction containing 'instruction'
exports.findAllByInstruction = (req, res) => {
    const instruction = req.params.instruction;

    Recipe.find({ instruction: { $regex: instruction, $options: "i" } })
        .then(data => {
            res.send(data);
        }
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving recipes."
            }
            );
        }
        );
}

// Find all Recipes with a name containing 'name' and published
exports.findAllByNamePublished = (req, res) => {
    const name = req.params.name;

    Recipe.find({ name: { $regex: name, $options: "i" }, published: true })
        .then(data => {
            res.send(data);
        }
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving recipes."
            }
            );
        }
        );
}

// Find all Recipes with a description containing 'description' and published
exports.findAllByDescriptionPublished = (req, res) => {
    const description = req.params.description;

    Recipe.find({ description: { $regex: description, $options: "i" }, published: true })
        .then(data => {
            res.send(data);
        }
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving recipes."
            }
            );
        }
        );
}
