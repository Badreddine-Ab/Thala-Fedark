const {gql} = require('apollo-server-express');
const authSchema = require('./authSchema')
const categorieSchema = require('./categorieSchema')
const CommandShema = require('./commandSchema')
const PromotionSchema = require('./promotionSchema')

const baseSchema =  gql`
scalar Date
type Query {
  _: Boolean
}
type Mutation {
  _: Boolean
}
type Subscription {
  _: Boolean
}
`;

module.exports =  [baseSchema, authSchema,categorieSchema,CommandShema,PromotionSchema]