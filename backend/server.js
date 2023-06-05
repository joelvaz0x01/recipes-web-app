const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

main()
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect(uri);
}

const usersRouter = require('./routes/user');
const recipesRouter = require('./routes/recipes');
const ingredientsRouter = require('./routes/ingredients');

app.use('/users', usersRouter);
app.use('/recipes', recipesRouter);
app.use('/ingredients', ingredientsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});