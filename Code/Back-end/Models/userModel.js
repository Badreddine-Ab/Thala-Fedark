const Sequelize = require('sequelize');
const {db} = require('../Config/DbConfig');
const role = require('./roleUserModel')

const user = db.define('users', {
    name : {
        type: Sequelize.STRING 
    },
    email : {
        type: Sequelize.STRING
    },
    password : {
        type : Sequelize.STRING
    },
    image : {
        type: Sequelize.STRING
    },
    emailToken : {
        type: Sequelize.STRING
    },
    isVerified : {
        type: Sequelize.BOOLEAN,
        default : false
    },
    codePromo : {
        type : Sequelize.STRING
    },
    promoUtilisé : {
        type: Sequelize.BOOLEAN,
        default : false
    }
})

role.hasMany(user)
user.belongsTo(role)
module.exports = user