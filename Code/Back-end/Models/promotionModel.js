const Sequelize = require('sequelize');
const {db} = require('../Config/DbConfig');

const promotion = db.define('promotion', {
    valeur : {
        type: Sequelize.INTEGER 
    },
    dateExpiration : {
        type: Sequelize.DATE
    },
    token : {
        type : Sequelize.STRING
    }
})
module.exports = promotion