import { gql } from "@apollo/client";
export const Delete_Prduct = gql`
mutation Mutation($deleteProductId: ID!) {
  deleteProduct(id: $deleteProductId) {
    id
  }
}
`;

export const Add_Produit = gql`
mutation Mutation($input: ProductInput) {
  createProduct(input: $input) {
    id
  }
}
`;
export const Edite_Produit = gql`
mutation UpdateProduct($updateProductId: ID!, $input: ProductInput!) {
  updateProduct(id: $updateProductId, input: $input) {
    categorie {
      id
    }
    description
    images
    name
    prix
    stock
  }
}
`;