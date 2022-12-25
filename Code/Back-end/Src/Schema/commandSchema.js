const { gql } = require('apollo-server-express');

module.exports = gql`
 type Commande {
    id:ID,
    prixTotal:Float,
    quantite:Int,
    etat:String,
    StartDate:String,
    EndDate:String,
    user:User
} 


 type Query {
    Querycommande:[Commande]
    StatistiqueAchats(StartDate:String!,EndDate:String!):Int
 }

 type Mutation{
    AddCommand(prixTotal:Float!,quantite:Int!,idUser:ID!): Commande
    updateCommand(id:ID!,etat:String!): Boolean
    deleteCommande(id:ID!): Boolean
 }

 type Subscription{
   Selectcommande:[Commande]
   
 }
 `