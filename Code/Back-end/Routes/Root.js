
const Commande = require('../Models/commandeModel');
const Categorie = require('../Models/categorieModel')
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
    AddCommand(id:ID):Commande
    updateCommand(id:ID,etat:Boolean):Boolean
 }
 type Categorie{    
        id : ID,
        name : String,
    }

    type Query{
        hello : String
        categories: [Categorie]
    }

    type Mutation{
        addCategorie(name:String!) : Categorie
        deleteCategorie(id:ID) : Boolean
        updateCategorie(id:ID!,name:String):Boolean
    }
`
module.exports={typeDefs}