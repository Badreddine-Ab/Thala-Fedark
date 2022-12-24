
const {GraphQLDateTime} = require('graphql-iso-date') 

const customScalarResolver = {
    Date: GraphQLDateTime,
  };
  
  
const authResolver = require('./authResolver');
const categorieResolver = require('./categorieResolver.js')
const commandResolver = require('./commandResolver')
module.exports = [customScalarResolver, authResolver, categorieResolver,commandResolver]