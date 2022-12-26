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
  type Product {
    id: ID
    name: String
    description: String!
    prix: Float!
    stock: Int!
    ventes: Int
    ventes_promo: Int
    images: [String]
    categorie: Categorie
  }
  type product_commande {
    id: ID
    product: Product
    commande: Commande
  }

  type Query {
    Querycommande: [product_commande]
    StatistiqueAchats(StartDate: String!, EndDate: String!): Int
  }

  type Mutation {
    AddCommand(quantite: Int! idUser: ID! product: ID!): Boolean
    updateCommand(id: ID!, etat: String!): Boolean
    deleteCommande(id: ID!): Boolean
  }

  type Subscription {
    Selectcommande: [Commande]
  }
`;
