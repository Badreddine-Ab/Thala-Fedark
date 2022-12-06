const Sequelize = require('sequelize');
const {db} = require('../Config/DbConfig');
const user = require('../Models/userModel')
const product = require('../Models/productModel')

const view_commentaire = db.define('view_commentaire', {
    starts : {
        type: Sequelize.STRING 
    },
    Comments : {
        type: Sequelize.STRING
    }
})

user.hasMany(view_commentaire)
view_commentaire.belongsTo(user)

product.hasMany(view_commentaire)
view_commentaire.belongsTo(product)

module.exports = view_commentaire