module.exports = (sequelize, Sequelize) => {
    const Recipe = sequelize.define("recipe", {
        name_recipe: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        userId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        }
    });

    return Recipe;
}