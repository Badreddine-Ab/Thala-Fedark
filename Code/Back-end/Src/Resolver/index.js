
const {GraphQLDateTime} = require('graphql-iso-date') 

const customScalarResolver = {
    Date: GraphQLDateTime,
  };
  
const authResolver = require('./authResolver');
const categorieResolver = require('./categorieResolver.js')
module.exports = [customScalarResolver, authResolver, categorieResolver]