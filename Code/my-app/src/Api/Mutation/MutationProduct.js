import { gql } from "@apollo/client";
export const Delete_Prduct = gql`
mutation Mutation($deleteProductId: ID!) {
  deleteProduct(id: $deleteProductId) {
    id
  }
}
`;

export const Add_Command = gql`
mutation AddCommand($prixTotal: Float!, $quantite: Int!, $idUser: ID!) {
  AddCommand(prixTotal: $prixTotal, quantite: $quantite, idUser: $idUser) {
    id
  }
}
`;