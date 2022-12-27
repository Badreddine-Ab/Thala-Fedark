
const {GraphQLDateTime} = require('graphql-iso-date') 

const customScalarResolver = {
    Date: GraphQLDateTime,
  };
  
  
const authResolver = require('./authResolver');
const categorieResolver = require('./categorieResolver.js')
const commandResolver = require('./commandResolver')
const promotion = require('./promotionResolver')
module.exports = [customScalarResolver, authResolver, categorieResolver,commandResolver,promotion]