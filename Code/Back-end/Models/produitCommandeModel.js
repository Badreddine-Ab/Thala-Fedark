const Sequelize = require('sequelize');
const {db} = require('../Config/DbConfig');
const product = require('../Models/productModel')
const commande = require('../Models/commandeModel')

const product_commande = db.define('product_commande', {
})

product.hasMany(product_commande)
product_commande.belongsTo(product)

commande.hasMany(product_commande)
product_commande.belongsTo(commande)

module.exports = product_commande