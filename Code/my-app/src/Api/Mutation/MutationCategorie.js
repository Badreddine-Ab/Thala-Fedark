import { gql } from "@apollo/client";
export const Delete_Categorie = gql`
mutation Mutation($deleteCategorieId: ID) {
  deleteCategorie(id: $deleteCategorieId)
}
`;

export const Add_Categorie = gql`
mutation AddCategorie($name: String!) {
  addCategorie(name: $name) {
    name
  }
}
`;