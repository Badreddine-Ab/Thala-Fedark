const { gql } = require("apollo-server-express");

module.exports = gql`
  type Commande {
    id: ID
    prixTotal: Float
    quantite: Int
    etat: String
    StartDate: String
    EndDate: String
    user: User
    product: ID
  }

  type Query {
    Querycommande: [product_commande]
    StatistiqueAchats(StartDate: String!, EndDate: String!): Int
  }

  type Mutation {
    AddCommand(prixTotal: Float!, quantite: Int!, idUser: ID!,product:ID!):Boolean
    updateCommand(id: ID!, etat: String!): Boolean
    deleteCommande(id: ID!): Boolean
  }

  type Subscription {
    Selectcommande: [Commande]
  }
`;
