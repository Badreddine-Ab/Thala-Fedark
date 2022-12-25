const Categorie = require('../../Models/categorieModel')
const Product = require('../../Models/productModel');
const multer = require('multer');

const  ApolloError = require("apollo-server");

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
        categorie: (_, { id }) => Categorie.findByPk(id, { include: [{ model: Product }] }),
        products: () => {
            return Product.findAll({
              include: [
                {
                  model: Categorie,
                },
              ],
            });
          },
    
          product: (_, { id }) => Product.findByPk(id, {
            include: [{ model: Categorie }],
          }),

          
          searchProduct: (root, args, context) => {
            return Product.findOne({
              where: {
                name: args.name,
              },
            });
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
        updateCategorie: (parent, { id, name }, ) => {
            try {
                return Categorie.update({ name }, { where: { id } });
            } catch (error) {
                throw error
            }
            
          },
        async createProduct(_, { input }) {
          // Process the uploaded images and save their URLs in the input object
          input.images = input.images.map(file => `http://localhost:9090/${file.path}`);
      
          // Create a new product using the input data
          const product = await Product.create(input);
      
          // Return the created product
          return product;
        },
        async updateProduct(_, { id, input }, ) {
          // Find the product with the given ID
          const product = await Product.findByPk(id);
      
          // If the product does not exist, return an error
          if (!product) {
            throw new Error(`Product with ID ${id} not found`);
          }
      
          // Update the product with the input data
          await product.update(input);
      
          // Return the updated product
          return product;
        },
        deleteProduct: async (_, args, { pubsub }) => {
          try {
            // delete the product from the database
            const product = await Product.findOne({ where: { id: args.id } });
            await product.destroy();
    
            // publish a message to the productDeleted channel
            pubsub.publish('productDeleted', { productDeleted: product });
    
            // return the deleted product
            return { product, error: null };
          } catch (error) {
            // return the error
            return { product: null, error };
          }
        },
        updateProductStock: async (_, { input }, { db }) => {
          try {
            // Find the product with the specified ID
            const product = await Product.findByPk(input.id);
    
            if (!product) {
              // If the product was not found, throw an ApolloError
              throw new ApolloError(`Product with ID ${input.id} not found`, "NOT_FOUND");
            }
    
            // Update the product's stock
            product.stock = input.stock;
    
            // Save the updated product to the database
            await product.save();
    
            return {
              product
            };
          } catch (error) {
            // If there was an error, return a custom error message
            return {
              error: "An error occurred while updating the product's stock"
            };
          }
        }
      
    },
    Subscription: {
      productDeleted: {
        subscribe: (_, args, { pubsub }) => {
          return pubsub.asyncIterator('productDeleted');
        }
      }
    }
   
}
