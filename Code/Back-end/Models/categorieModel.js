const Sequelize = require('sequelize');
const {db} = require('../Config/DbConfig');

const categorie = db.define('categorie', {
    name : {
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = categorie
