const Sequelize = require('sequelize');
const Product = require('./productModel')
const {db} = require('../Config/DbConfig');

const categorie = db.define('categorie', {
    name : {
        type: Sequelize.STRING 
    },
})


Product.belongsTo(categorie, { foreignKey: 'categorieId' });
categorie.hasMany(Product)


module.exports = categorie