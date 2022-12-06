const Sequelize = require('sequelize')
const {db} = require('../Config/DbConfig')

const role = db.define('roles' , {
    role : {
        type : Sequelize.STRING
    }
})
module.exports = role