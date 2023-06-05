const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: false,
        minlength: 2
    },
}, {
    timestamps: true,
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;