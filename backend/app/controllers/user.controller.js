const db = require("../models");
const bcrypt = require("bcryptjs");
const User = db.users;

// Login a User
exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email })
        .then(data => {
            if (!data) {
                return res.status(404).send({ message: "User Not found." });
            }

            var passwordIsValid = bcrypt.compareSync(
                password,
                data.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    message: "Invalid Password!"
                });
            }

            res.status(200).send({
                id: data._id,
                username: data.username,
                email: data.email
            });
        }
        )
        .catch(err => {
            res.status(500).send({ message: err.message });
        }
        );
}

// Register a User
exports.register = (req, res) => {
    // Validate request
    console.log(req.body);
    if (!req.body.username || !req.body.email || !req.body.password) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a User
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        isAdmin: false
    });

    // Save User in the database
    user
        .save(user)
        .then(data => {
            res.send({
                id: data._id,
                username: data.username,
                email: data.email,
                isAdmin: data.isAdmin,
                accessToken: null
            });
        }
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        }
        );
}

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    const username = req.query.username;
    var condition = username ? { username: { $regex: new RegExp(username), $options: "i" } } : {};

    User.find(condition)
        .then(data => {
            res.send(data);
        }
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        }
        );
}

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findById(id)
        .then(data => {
            res.send(data);
        }
        )
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving User with id=" + id
            });
        }
        );
}

// Update a User by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        }
        );
    }
    const id = req.params.id;
    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update User with id=${id}. Maybe User was not found!`
                }
                );
            } else res.send({ message: "User was updated successfully." });
        }
        )
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with id=" + id
            }
            );
        }
        );
}

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    User.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete User with id=${id}. Maybe User was not found!`
                }
                );
            } else {
                res.send({
                    message: "User was deleted successfully!"
                }
                );
            }
        }
        )
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            }
            );
        }
        );
}

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
    User.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Users were deleted successfully!`
            }
            );
        }
        )
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all users."
            }
            );
        }
        );
}

// Verifi if the user is admin
exports.isAdmin = (req, res) => {
    const username = req.body.username;

    User.findOne({ username: username })
        .then(data => {
            console.log(data);
            if (!data) {
                return res.status(404).send({ message: "User Not found." });
            }

            res.status(200).send({
                isAdmin: data.isAdmin
            });
        }
        )
        .catch(err => {
            res.status(500).send({ message: err.message });
        }
        );
}