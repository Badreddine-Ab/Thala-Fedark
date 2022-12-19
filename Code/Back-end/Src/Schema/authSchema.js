
const { gql } = require( 'apollo-server-express');

module.exports= gql`
type User{
    id : Int,
    name : String,
    email : String,
    password : String,
    role : String
}
type AuthPayload{
    user : User
    token : String
}
extend type Query{
    hello : String
}
extend type Mutation{
    signup(name : String!, email : String! , password : String!, role : String!) : User
    login(email : String!, password : String!) : AuthPayload
    foregetPassword(email : String!) : String
    resetPassword(password : String! , token : String!) : String
}
`;



