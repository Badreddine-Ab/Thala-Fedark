const Sequelize = require('sequelize');
const {db} = require('../Config/DbConfig');
const promotion = require('../Models/promotionModel')

const product = db.define('product', {
    name : {
        type: Sequelize.STRING 
    },
    description : {
        type: Sequelize.TEXT
    },
    prix : {
        type : Sequelize.FLOAT
    },
    stock : {
        type : Sequelize.INTEGER
    },
    ventes : {
        type : Sequelize.INTEGER
    },
    ventes_promo : {
        type : Sequelize.INTEGER
    },
    images: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
    }
})

promotion.hasMany(product)
product.belongsTo(promotion)

module.exports = product