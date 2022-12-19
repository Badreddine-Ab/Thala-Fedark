const Sequelize = require('sequelize');
const {db} = require('../Config/DbConfig');
const user = require('../Models/userModel')

const commande = db.define('commande', {
    prixTotal : {
        type: Sequelize.FLOAT 
    },
    quantite : {
        type: Sequelize.INTEGER
    },
    etat : {
        type: Sequelize.STRING
    }
})

user.hasMany(commande)
commande.belongsTo(user)

module.exports = commande