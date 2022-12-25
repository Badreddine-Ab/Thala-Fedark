const Sequelize = require('sequelize');
const { db } = require('../Config/DbConfig');
const promotion = require('../Models/promotionModel')

const product = db.define('product', {
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    },
    prix: {
        type: Sequelize.FLOAT
    },
    stock: {
        type: Sequelize.INTEGER
    },
    ventes: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    ventes_promo: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    },
    images: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: ["no picture for this product"],
    }
})

promotion.hasMany(product)
product.belongsTo(promotion)

module.exports = product