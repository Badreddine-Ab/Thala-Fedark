
const { gql } = require( 'apollo-server-express');

module.exports= gql`
type Categorie{    
    id: ID,
    name: String,
    products: [Product]
}

type Product {
        id: ID!,
        name: String,
        description: String!,
        prix: Float!,
        stock: Int!,
        ventes: Int,
        ventes_promo: Int
        images: [String]!
        categorie: Categorie
}



extend type Query{
    categories: [Categorie]
    products: [Product]
    categorie(id: ID!): Categorie
    product(id: ID!): Product
}

extend type Mutation{
    addCategorie(name:String!) : Categorie
    deleteCategorie(id:ID) : Boolean
    updateCategorie(id: ID!, name: String!): Categorie
    # createProduct(name: String!,description:String!, prix: Float!,stock:Int, categorieId: ID!): Product!
    # updateProduct(id: ID!, name: String!,description:String!, prix: Float!,stock:Int,ventes:Int!,ventes_promo:Int! categorieId: ID!): Product!
    # deleteProduct(id: ID!): Boolean
    addProduct(name: String!, description: String!, stock: Int!, images: [String]!, categorieId: ID!): Product
    updateProduct(id: ID!, name: String, description: String, stock: Int, images: [String], categorieId: ID): Product
    deleteProduct(id: ID!): Product
    

}
`