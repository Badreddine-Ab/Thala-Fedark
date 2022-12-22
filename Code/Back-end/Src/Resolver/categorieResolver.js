const Categorie = require('../../Models/categorieModel')
const Product = require('../../Models/productModel');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

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
        async deleteProduct(_, { id }, ) {
          // Find the product with the given ID
          const product = await Product.findByPk(id);
      
          // If the product does not exist, return an error
          if (!product) {
            throw new Error(`Product with ID ${id} not found`);
          }
      
          // Destroy the product
          await product.destroy();
      
          // Return the ID of the deleted product
          return id;
        }
      
    }
   
}
