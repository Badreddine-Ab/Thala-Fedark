const Sequelize = require('sequelize')
const {db} = require('../Config/DbConfig')
const product = require('../Models/productModel')
const favorie = require('../Models/favorieModel')

const product_favorie = db.define('product_favorie',{

})

product.hasMany(product_favorie)
product_favorie.belongsTo(product)

favorie.hasMany(product_favorie)
product_favorie.belongsTo(favorie)

module.exports = product_favorie