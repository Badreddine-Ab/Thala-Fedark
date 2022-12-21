
const { gql } = require( 'apollo-server');


module.exports= gql`
scalar Upload

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
        images: [String]
        categorie: Categorie
}

input ProductInput {
  name: String!
  description: String!
  prix: Float!
  stock: Int!
  ventes: Int!
  ventes_promo: Int!
  images: [Upload]
  categorieId: ID!
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
    # addProduct(name: String!, description: String!, stock: Int!, images: [Upload]!, categorieId: ID!): Product
    # updateProduct(id: ID!, name: String, description: String, stock: Int, images: [Upload], categorieId: ID): Product
    # deleteProduct(id: ID!): Product
    # addProduct(input: ProductInput!): Product
    createProduct(input: ProductInput!): Product!
    updateProduct(id: ID!, input: ProductInput!): Product!
    deleteProduct(id: ID!): Product!
    
}
`