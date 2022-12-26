
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
  ventes: Int
  ventes_promo: Int
  images: [Upload]
  categorieId: ID
}

input UpdateProductStockInput {
  id: ID!
  stock: Int!
}

type UpdateProductStockPayload {
  product: Product
}

type Subscription {
    productDeleted: Product
  }

extend type Query{
    categories: [Categorie]
    products: [Product]
    categorie(id: ID!): Categorie
    product(id: ID!): Product
    searchProduct(name: String!): Product
}

extend type Mutation{
    addCategorie(name:String!) : Categorie
    deleteCategorie(id:ID) : Boolean
    updateCategorie(id: ID!, name: String!): Categorie
    createProduct(input: ProductInput): Product
    updateProduct(id: ID!, input: ProductInput!): Product!
    deleteProduct(id: ID!): DeleteProductResponse
    updateProductStock(input: UpdateProductStockInput!): UpdateProductStockPayload

}

type DeleteProductResponse {
    product: Product
    error: String
  }
  
`