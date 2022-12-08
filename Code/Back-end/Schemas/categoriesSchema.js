import { GraphQLInt, GraphQLString } from 'graphql';
import db from '../Models/categorieModel'

const Categorie = new GraphQLObjectType({
    name: 'Categorie',
    description : 'This is a Categorie table',
    fields : () => {
        return {
            id: {
                type : GraphQLInt,
                resolve(categorie) {
                    return categorie.id
                }
            },
            name: {
                type : GraphQLString,
                resolve(categorie) {
                    return categorie.name
                }
            }
        }
    }
});
