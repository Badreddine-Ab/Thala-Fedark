
// const Commande = require('../Models/commandeModel');
// const Categorie = require('../Models/categorieModel')
const { gql } = require('apollo-server-express');


const typeDefs = gql`
 type Commande {
    id:ID,
    prixTotal:Float,
    quantite:Int,
    etat:String,
    idUser:Int
 }

 type Query {
    Querycommande:[Commande]
 }

 type Mutation{
    AddCommand(prixTotal:Float!,quantite:Int!,idUser:Int!): Commande
    updateCommand(id:ID,etat:Boolean): Boolean
 }
 
 type Product{    
        id: ID,
        name: String,
        description: String,
        prix: Float,
        stock: Int,
        ventes: Int,
        ventes_promo: Int,
        images : [Image]
        Categorie : Categorie 
    }

    type Image{
        image : String
    }

    type Query{
        products: [Product]
    }

    type Mutation{
        addProduct(name:String!,description:String,prix:Float,stock:Int) : Product
        deleteProduct(id:ID) : Boolean
        updateProduct(id:ID!,name:String):Boolean
    }
`
module.exports={typeDefs}