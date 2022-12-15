const { ApolloServer, gql } = require('apollo-server-express');
const Categorie = require('../Models/categorieModel')
const Product = require('../Models/productModel');

const typeDefs = gql`

    type Categorie{    
        id: ID!,
        name: String!,
        products: [Product]
    }

    type Product{
        id:ID!
        name:String
        prix:Float
        stock:Int
        ventes:Int
        ventes_promo:Int
        images:[String]
        categorie:Product
    }


    type Query{
        hello : String
        categories: [Categorie]
        products:[Product]
        SingleProduct(id:Int!):Product
        SingleCategorie(id:Int!):Categorie
    }

    type Mutation{
        addCategorie(name:String!) : Categorie
        deleteCategorie(id:ID!) : Boolean
        updateCategorie(id:ID!,name:String):Boolean
        addProduct(name:String!,description:String!,prix:Float,stock:Float,ventes:Int,ventes_promo:Int,images:String) : Product
        updateProduct(id:ID!,name:String,description:String,prix:Float,stock:Float,ventes:Int,ventes_promo:Int,images:String) : Boolean
        deleteProduct(id:ID!) : Boolean
    }
`;

const resolvers = {
    Query: {
        hello: () => "hello world",
        categories: async (root)=> {
            try {
                const categories = await Categorie.findAll({})
                return categories
            } catch (error) {
                throw error
            }
            
        },
        products: async (root)=> {
            try {
                const products = await Product.findAll({})
                return products 
            } catch (error) {
                throw error
            }
            
        }, 
        SingleProduct: async (root,{id})=> {
            
        },
        SingleCategorie: async (root,{id})=> {
            
        },
         
    },
    
    Mutation: {
        addCategorie: async (_, args) => {
           try {
            const {name} = args
            if(!name){
                throw new Error('Please entre a catogie name')
            }
            const already_exist = await Categorie.findOne({ where: { name } });
            if(already_exist){
                throw new Error('This Categorie already exist')
            }
            
            const categories = await Categorie.create({
                name:name
            })
            return categories
           } catch (error) {
                throw error
           }
        
        },
        deleteCategorie: async(_,args) => {
            try {
                let response = false
                const categorie_deleted =await Categorie.destroy({where:args})
                if(categorie_deleted){
                    response = true
                } 
                return response
            } catch (error) {
                throw error
            }
        },
        updateCategorie: async(_,args) => {
            try {
                const updated_data = {}
                if(args.name){
                    updated_data['name']=args.name
                }
                const categorie_updated = await Categorie.update(updated_data,{ where: args })
                let response=false
                if(categorie_updated){
                    response=true
                }
                return response
            } catch (error) {
                throw error
            }
        },
        addProduct: async (_, args) => {
            try {
                const {name,description,prix,stock,ventes,ventes_promo,images} = args
             const products = await Product.create({
                 name,
                 description,
                 prix,
                 stock,
                 ventes,
                 ventes_promo,
                 images
             })
             return categories
            } catch (error) {
                 throw error
            }
         
         }

    }
}

module.exports = { typeDefs, resolvers }