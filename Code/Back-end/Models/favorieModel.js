const Sequelize = require('sequelize');
const {db} = require('../Config/DbConfig');
const user = require('../Models/userModel')

const favorie = db.define('favorie', {
})

user.hasMany(favorie)
favorie.belongsTo(user)


module.exports = favorie