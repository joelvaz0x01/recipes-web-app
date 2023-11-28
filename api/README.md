# Database API using Node.js and MongoDB for the Recipes Web App

## Initial setup
```bash
echo "DB_URL = <database_url>" >> .env
npm install
```

## API execution

### Development or Production mode (choose only one mode)

#### Windows:
```bash
$ NODE_ENV=<development|production> node database-server.js
```

#### Linux:
```bash
$ export NODE_ENV=<development|production>
```

## API Endpoints Available

1. **GET `/recipes`**
    - Get all recipes

2. **GET `/recipes/:id`**
    - Get a recipe by id

3. **POST `/recipes`**
    - Create a new recipe

4. **PUT `/recipes/:id`**
    - Update a recipe by id

5. **DELETE `/recipes/:id`**
    - Delete a recipe by id

6. **DELETE `/recipes`**
    - Delete all recipes

7. **POST `/recipes/search`**
    - Search recipes by name

8. **POST `/users/register`**
    - Register a new user

9. **POST `/users`**
    - Login a user

10. **GET `/users`**
    - Get all users

11. **GET `/users/:id`**
    - Get a user by id

12. **PUT `/users/:id`**
    - Update a user by id

13. **DELETE `/users/:id`**
    - Delete a user by id

14. **DELETE `/users`**
    - Delete all users

15. **GET `/users/admin/:id`**
    - Verify if a user is admin
