import { graphql, GraphQLFloat, GraphQLInt, GraphQLList, GraphQLString } from 'graphql';
import db from '../Models/productModel'

const Product = new GraphQLObjectType({
    name: 'Product',
    description : 'This is a Product table',
    fields : () => {
        return {
            id: {
                type : GraphQLInt,
                resolve(product) {
                    return product.id
                }
            },
            name: {
                type : GraphQLString,
                resolve(product) {
                    return product.name
                }
            },
            description : {
                type : GraphQLString,
                resolve(product){
                    return product.description
                }
            },
            prix : {
                type : GraphQLFloat,
                resolve(product){
                    return product.prix
                }
            },
            stock : {
                type : GraphQLInt,
                resolve(product){
                    return product.stock
                }
            },
            ventes : {
                type : GraphQLInt,
                resolve(product){
                    return product.ventes
                }
            },
            ventes_promo : {
                type : GraphQLInt,
                resolve(product){
                    return product.product
                }
            },
            images : {
                type: GraphQLList,
                resolve(product){
                    return product.iamges
                }
            },
            
        }
    }
});
