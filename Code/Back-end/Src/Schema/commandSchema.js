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
    Commande: Commande
  }

  type Query {
    Querycommande: [Commande]
    Countcommande: Int
    StatistiqueAchats(StartDate: String!, EndDate: String!): Int
  }

  type Mutation {
    AddCommand(
      prixTotal: Float!
      quantite: Int!
      idUser: ID!
      product: ID!
    ): Boolean
    updateCommand(id: ID!, etat: String!): Boolean
    deleteCommande(id: ID!): Boolean
  }

  type Subscription {
    Selectcommande: [Commande]
    DeleteCommand(id: ID!): Boolean
  }
`;
