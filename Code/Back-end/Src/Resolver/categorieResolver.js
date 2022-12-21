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
        //   addProduct: (_, {  name, description, stock, images, categorieId }) => {
        //     // Use the Sequelize `create` method to create a new product and associate it with the specified category
        //     return Product.create( {name, description, stock, images, categorieId}, {
        //       include: [{
        //         model: Categorie,
        //         as: 'categorie'
        //       }]
        //     });
        //   }
        // addProduct: async (_, { input }) => {
        //   try { 
        //     // Destructure the images field from the input object
        //     const { images, ...rest } = input;
        //     // Extract the categorieId field from the rest object
        //     const { id: categorieId } = rest;
            
        //     // Find the category by its ID
        //     const categorie = await Categorie.findByPk(categorieId);
        //     // If the category doesn't exist, throw an error
        //     console.log(categorieId)
        //     if (!categorie) {
        //       throw new ApolloError('Category not found');
        //     }
        //     // Create the product with the rest of the input fields and the categorieId
        //     const product = await Product.create({ ...rest, categorieId });
        //     // If there are images, save them to the file system
        //     if (images) {
        //       await Promise.all(
        //         images.map(async ({ createReadStream }) => {
        //           // Generate a unique file name for the image
        //           const path = `images/${product.id}-${Date.now()}.jpg`;
        //           // Use the createReadStream function from the image object to read the image data and pipe it to a write stream that saves the image to the file system
        //           return new Promise((resolve, reject) =>
        //             createReadStream()
        //               .pipe(createWriteStream(path))
        //               .on('finish', () => resolve())
        //               .on('error', reject)
        //           );
        //         })
        //       );
        //     }
        //     // Return the created product
        //     return product;
        //   } catch (error) {
        //     // If an error occurs, throw a GraphQL error
        //     throw new ApolloError(error);
        //   }
        // }
        // createProduct: async (parent, { input },) => {
        //   const { images, ...rest } = input;
        //   const categorie = await Categorie.findByPk(rest.categorieId);
        //   if (!categorie) {
        //     throw new Error("Category not found");
        //   }
        //   const product = await Product.create(rest);
        //   console.log(product)
        //   if (images) {
        //     const imagePromises = images.map(async (image) => {
        //       const { createReadStream, filename } = await image;
        //       const stream = createReadStream();
        //       const path = `${uuidv4()}-${filename}`;
        //       await storeUpload({ stream, path });
        //       return path;
        //     });
        //     product.images = await Promise.all(imagePromises);
        //   }
        //   await product.save();
        //   return product;
        // }
        async createProduct(_, { input }) {
          // Process the uploaded images and save their URLs in the input object
          input.images = input.images.map(file => `http://localhost:9090/${file.path}`);
      
          // Create a new product using the input data
          const product = await Product.create(input);
      
          // Return the created product
          return product;
        },
        async updateProduct(_, { id, input }, { models }) {
          // Find the product with the given ID
          const product = await models.Product.findByPk(id);
      
          // If the product does not exist, return an error
          if (!product) {
            throw new Error(`Product with ID ${id} not found`);
          }
      
          // Update the product with the input data
          await product.update(input);
      
          // Return the updated product
          return product;
        },
        async deleteProduct(_, { id }, { models }) {
          // Find the product with the given ID
          const product = await models.Product.findByPk(id);
      
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
