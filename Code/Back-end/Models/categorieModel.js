import Sequelize from 'sequelize'
const sequelize = new Sequelize(`postgres://localhost:5432/Thela_fdark`)

const Categorie = sequelize.define('categorie', {
    // attributes
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })

export default sequelize;