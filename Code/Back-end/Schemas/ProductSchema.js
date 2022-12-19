const { ApolloServer } = require('apollo-server-express');
const Categorie = require('../Models/categorieModel')
const Product = require('../Models/productModel');


const resolvers = {
    Query: {
        products: async ()=> {
            const products = await Product.findAll({})
            return products
        } 
    },
    Mutation: {
        addProduct: async (_, args) => {
           try {
            
            const {name,description,prix,stock} = args
            const products = await Product.create({
                name:name,
                description:description,
                prix:prix,
                stock:stock
            })
            return products
           } catch (error) {
                throw error
           }
        
        },
        deleteProduct: async(_,args) => {
           
        },
        updateProduct: async(_,args) => {
           
        }

    }
}

module.exports = {resolvers }