
const { gql } = require( 'apollo-server-express');

module.exports= gql`
type Categorie{    
    id : ID,
    name : String,
 
}

extend type Query{
    categories: [Categorie]
}

extend type Mutation{
    addCategorie(name:String!) : Categorie
    deleteCategorie(id:ID) : Boolean
    updateCategorie(id:ID!,name:String):Boolean
}
`