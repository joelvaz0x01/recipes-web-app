const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

// const client = new MongoClient(uri);

// async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB Atlas');

//     const db = client.db(); // Replace with your database name
//     return db;
//   } catch (error) {
//     console.error('Error connecting to MongoDB Atlas:', error);
//   }
// }

main()
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect(uri);
}



async function createUser(name, email, password) {
    const db = await main();
    const collection = db.collection('User'); // Replace with your collection name
  
    const newUser = {
      name,
      email,
      password,
    };
  
    const result = await collection.insertOne(newUser);
    return result.insertedId;
}
  
  async function getUserByEmail(email) {
    const db = await main();
    const collection = db.collection('User'); // Replace with your collection name
  
    const user = await collection.findOne({ email });
    return user;
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

module.exports = { main, createUser, getUserByEmail };