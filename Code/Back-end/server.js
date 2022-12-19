require('dotenv').config()
const { connectDb } = require('./Config/DbConfig')
const models = require('./Models/index')
// const errRoute = require('./Middlewares/AuthMiddlewares')
const apiError = require('./Utils/ErrorUtils')
const globalError = require('./Middlewares/errorMiddleware')
const { ApolloServer } = require('apollo-server-express')
// const { resolvers } = require('./Schemas/CategorieSchema')
// const { resolverCommand  } = require('./Schemas/CommandShema')
// const { typeDefs  } = require('./Routes/Root')
const schema = require('./src/schema/index')
const resolvers = require('./Src/Resolver/index')



console.log(process.env.host)

const cors = require('cors');
const cookieParser = require("cookie-parser");
const express = require('express');
const router = require('./Routes/AuthRouter')

const creatRoleDefalut = require('./Utils/creatRoleDefault')

async function init() {
    await connectDb()
    await creatRoleDefalut()
}
init()

const app = express()

app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json())
app.use('/api/auth', router)

app.get('/', (req, res) => {
    return res.send('home page')
})
// app.use(errRoute)

const StartAppoloServer = async () => {
    const server = new ApolloServer({typeDefs: schema, resolvers})
    await server.start()
    server.applyMiddleware({ app, path: "/graphql" })
    console.log(`apollo server is running at http://localhost:${port}${server.graphqlPath}`)
}

StartAppoloServer()
// Global error handling middleware
app.use(globalError);

const port = process.env.PORT || 8081


const server = app.listen(port, (err) => {
    if (!err) {
        console.log(`the port ${port} is running`)
    } else {
        console.log(err)
    }
})


// Handle errors outside express
process.on("unhandledRejection", (err) => {
    console.error(`UnhandledRejection Errors : ${err.name} | ${err.message}`);
    server.close(() => {
        console.error('Shutting down....')
        process.exit(1)
    })
})



module.exports = app
