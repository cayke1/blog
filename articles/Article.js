const Sequelize = require('sequelize');
const connection = require('../database/connection');
const Category = require('../categories/Category');

const Article = connection.define('articles', {
    title:{
    type: Sequelize.STRING,
    allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false

    }
});

Category.hasMany(Article); //UMA categoria tem MUITOS artigos
Article.belongsTo(Category); // UM Artigo pertence a UMA categoria

module.exports = Article;