const { ApolloServer } = require('apollo-server-express');
const Categorie = require('../../Models/categorieModel')
const Product = require('../../Models/productModel');


module.exports= {
    Query: {
        categories: async() =>{
             const categorie = await Categorie.findAll({include:Product,row:true,nest:true})
             return categorie
            },
        categorie: async() =>{
            const categorie = await Categorie.findByPk(id)
            return categorie
        } ,
        products: async() =>{
            const product = await Product.findAll({})
            return product
        } ,
        // product: (_, { id }, { db }) => db.Product.findByPk(id), 
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
        updateCategorie: (parent, { id, name }, ) => {
            try {
                return Categorie.update({ name }, { where: { id } });
            } catch (error) {
                throw error
            }
            
          },
          addProduct: (parent, { name, description, stock, images, categoryId }) => {
            return Product.create({ name, description, stock, images, categoryId });
          },
          updateProduct: (parent, { id, name, description, stock, images, categoryId }) => {
            return Product.update({ name, description, stock, images, categoryId }, { where: { id } });
          },
          deleteProduct: (parent, { id }) => {
            return Product.destroy({ where: { id } });
          }
    
    }
}
