const { gql } = require('apollo-server-express');

module.exports = gql`
 type Commande {
    id:ID,
    prixTotal:Float,
    quantite:Int,
    etat:String,
    userId:ID
 }

 type Query {
    Querycommande:[Commande]
 }

 type Mutation{
    AddCommand(prixTotal:Float!,quantite:Int!,idUser:ID!): Commande
    updateCommand(id:ID!,etat:String!): Boolean
    deleteCommande(id:ID!): Boolean
 }
 `