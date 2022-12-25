import { gql } from "@apollo/client";
export const Delete_Command = gql`
 mutation DeleteCommande($deleteCommandeId: ID!) {
  deleteCommande(id: $deleteCommandeId)
}
`;

export const Add_Command = gql`
mutation AddCommand($prixTotal: Float!, $quantite: Int!, $idUser: ID!) {
  AddCommand(prixTotal: $prixTotal, quantite: $quantite, idUser: $idUser) {
    id
  }
}
`;