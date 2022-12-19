const { gql } = require('apollo-server-express');

module.exports = gql`
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
 `