const Sequelize = require('sequelize');
const Product = require('./productModel')
const {db} = require('../Config/DbConfig');

const categorie = db.define('categorie', {
    name : {
        type: Sequelize.STRING 
    },
})

categorie.hasMany(Product)
Product.belongsTo(categorie)

module.exports = categorie