const Sequelize = require('sequelize');
const {db} = require('../Config/DbConfig');
const product = require('../Models/productModel')
const categorie = require('../Models/categorieModel')

const product_categorie = db.define('product_categorie', {
})

product.hasMany(product_categorie)
product_categorie.belongsTo(product)

categorie.hasMany(product_categorie)
product_categorie.belongsTo(categorie)

module.exports = product_categorie