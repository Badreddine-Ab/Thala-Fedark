
const Sequelize = require('sequelize');
const {db} = require('../Config/DbConfig');
const promotion = require('../Models/promotionModel')

const product = db.define('product', {
    name : {
        type: Sequelize.STRING,
        allowNull: false
    },
    description : {
        type: Sequelize.STRING,
        allowNull: false
    },
    prix : {
        type : Sequelize.FLOAT,
        allowNull: false
    },
    stock : {
        type : Sequelize.INTEGER,
        allowNull: true
    },
    ventes : {
        type : Sequelize.INTEGER,
        allowNull: true
    },
    ventes_promo : {
        type : Sequelize.INTEGER,
        allowNull: true
    },
    images: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true
   }
})

promotion.hasMany(product)
product.belongsTo(promotion)

module.exports = product