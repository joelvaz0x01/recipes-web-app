const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    recipe_id: {
        type: Number,
        auto: true
    },
    user: {
        // nao querias meter emial?
        type: String,
        required: true,
        ref: 'User'
    },
    name_recipe: {
        type: String,
        required: true,
        minlength: 3
    },
    description: {
        type: String,
        required: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

const Recipe = mongoose.model('Receita', recipeSchema);

module.exports = Recipe;