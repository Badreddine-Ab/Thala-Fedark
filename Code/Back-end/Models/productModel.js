import Sequelize from 'sequelize'
const sequelize = new Sequelize(`postgres://localhost:5432/Thela_fdark`)

const Product = sequelize.define('product', {
    // attributes
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description : {
        type : Sequelize.STRING,
        allowNull: false 
    },
    prix : {
        type : Sequelize.FLOAT,
        allowNull : false
    },
    stock : {
        type : Sequelize.INTEGER,
        allowNull : true
    },
    ventes : {
        type : Sequelize.INTEGER,
        allowNull : true,
    },
    ventes_promo : {
        type : Sequelize.INTEGER,
        allowNull : true,
    },
    images : {
        type : Sequelize.ARRAY,
        allowNull:true
    }
  })

export default sequelize;