const { ApolloServer } = require('apollo-server-express');
const Categorie = require('../../Models/categorieModel')
const Product = require('../../Models/productModel');


module.exports= {
    Query: {
        categories: () => {
            return Categorie.findAll({
              include: [
                {
                  model: Product,
                },
              ],
            });
          },
        categorie: async() =>{
            const categorie = await Categorie.findByPk(id)
            return categorie
        } ,
        products: () => {
            return Product.findAll({
              include: [
                {
                  model: Categorie,
                },
              ],
            });
          },
    
        product: (_, { id },) => findByPk(id), 
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
        //   addProduct: (parent, { name, description, stock, images, categorieId }) => {
        //     return Product.create({ name, description, stock, images, categorieId });
        //   },
          updateProduct: (parent, { id, name, description, stock, images, categorieId }) => {
            return Product.update({ name, description, stock, images, categorieId }, { where: { id } });
          },
          deleteProduct: (parent, { id }) => {
            return Product.destroy({ where: { id } });
          },
          addProduct: (_, {  name, description, stock, images, categorieId }) => {
            // Use the Sequelize `create` method to create a new product and associate it with the specified category
            return Product.create( {name, description, stock, images, categorieId}, {
              include: [{
                model: Categorie,
                as: 'categorie'
              }]
            });
          }
    
    }
}
