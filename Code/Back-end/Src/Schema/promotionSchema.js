const { gql } = require("apollo-server-express");

module.exports = gql`
  type Promotion {
    id: ID
    valeur:Int
    dateExpiration:String
    token:String
  }
  type Query {
    QueryPromotion: [Promotion]
  }

  type Mutation {
    AddPromotion(
        valeur:Int!
        dateExpiration:String!
        token:String!
    ): Boolean
     updatePromotion(id: ID!,valeur:Int!,dateExpiration:String!,token:String!): Boolean
     deletePromotion(id: ID!): Boolean
  }

 type Subscription {
     SelectPromotion: [Promotion]
   }
`;
