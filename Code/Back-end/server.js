require('dotenv').config()
const {connectDb} = require('./Config/DbConfig')
const userModel = require('./Models/userModel')
const roleuserModel = require('./Models/roleUserModel')

const errRoute = require('./Middlewares/AuthMiddlewares')

const apiError = require('./Utils/ErrorUtils')
const globalError = require('./Middlewares/errorMiddleware')

const cors = require('cors');
const cookieParser = require("cookie-parser");
const express = require('express');
const router = require('./Routes/authRouter')

connectDb()

const app = express()

app.use(cookieParser());
app.use(cors({ origin:true, credentials:true }));
app.use(express.json())
app.use('/api/auth',router)
app.use(errRoute)


// Global error handling middleware
app.use(globalError);

const port = process.env.PORT || 8081


const server = app.listen(port, (err)=> {
    if(!err){
    console.log(`the port ${port} is running`)
    }else{
        console.log(err)
    }
})


// Handle errors outside express
process.on("unhandledRejection",(err)=> {
    console.error(`UnhandledRejection Errors : ${err.name} | ${err.message}`);
    server.close(()=> {
        console.error('Shutting down....')
        process.exit(1)
    })      
})



module.exports = app
