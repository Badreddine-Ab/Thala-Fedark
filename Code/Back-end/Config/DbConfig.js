const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.password, {
  host: process.env.host,
  dialect: 'postgres'
});


const connectDb = async ()=>{
    try {
        await db.authenticate()
        await db.sync()
        console.log("Connection has been established successfully.")
        
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = {connectDb,db}