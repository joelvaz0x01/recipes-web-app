const router = require('express').Router();
let Recipe = require('../models/recipes.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const { name } = req.body;

    const newUser = new Recipe({ name });

    newUser.save()
        .then(() => res.json('Recipe added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;