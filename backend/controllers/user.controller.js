const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.email || !req.body.password) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a User
    const user = {
        email: req.body.email,
        password: req.body.password
    };

    // Save User in the database
    User.create(user)
        .then(data => {
            res.send(data);
            console.log(data);
        }
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
            console.log(err);
        }
        );
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    const email = req.query.email;
    var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;

    User.findAll({ where: condition })
        .then(data => {
            res.send(data);
            console.log(data);
        }
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
            console.log(err);
        }
        );
}

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findByPk(id)
        .then(data => {
            res.send(data);
            console.log(data);
        }
        )
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving User with id=" + id
            });
            console.log(err);
        }
        );
}

// Update a User by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was updated successfully."
                });
                console.log(num);
            } else {
                res.send({
                    message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
                });
                console.log(num);
            }
        }
        )
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with id=" + id
            });
            console.log(err);
        }
        );
}

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
                console.log(num);
            } else {
                res.send({
                    message: `Cannot delete User with id=${id}. Maybe User was not found!`
                });
                console.log(num);
            }
        }
        )
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
            console.log(err);
        }
        );
}

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
    User.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Users were deleted successfully!` });
            console.log(nums);
        }
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all users."
            });
            console.log(err);
        }
        );
}

// Find all published Users
exports.findAllPublished = (req, res) => {
    User.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
            console.log(data);
        }
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
            console.log(err);
        }
        );
}

// Find all Users with a given email
exports.findAllByEmail = (req, res) => {
    const email = req.params.email;

    User.findAll({ where: { email: email } })
        .then(data => {
            res.send(data);
            console.log(data);
        }
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
            console.log(err);
        }
        );
}

// Find all Users with a given password
exports.findAllByPassword = (req, res) => {
    const password = req.params.password;

    User.findAll({ where: { password: password } })
        .then(data => {
            res.send(data);
            console.log(data);
        }
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
            console.log(err);
        }
        );
}

// Find all Users with a given email and password
exports.findAllByEmailAndPassword = (req, res) => {
    const email = req.params.email;
    const password = req.params.password;

    User.findAll({ where: { email: email, password: password } })
        .then(data => {
            res.send(data);
            console.log(data);
        }
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
            console.log(err);
        }
        );
}
