const Sequelize = require('sequelize');
const product = require('./productModel')

const image = db.define('images' , {
    image : {
        type : Sequelize.STRING
    }
})

product.hasMany(image)
image.belogsto(product)

module.exports = image