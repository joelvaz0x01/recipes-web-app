const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const { name, email, password } = req.body;

    const newUser = new User({ name, email, password });

    newUser.save()
        .then(() => res.json('Record added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;