const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    recipe_id: {
        type: Number,
        auto: true
    },
    ingredients_ids: {
        type: Array,
        required: true,
        ref: 'Ingredient'
    },
    user: {
        type: String,
        required: true,
        ref: 'User'
    },
    description: {
        type: String,
        required: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;