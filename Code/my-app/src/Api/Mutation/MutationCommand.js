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

export const Edite_Etat = gql`
mutation Mutation($updateCommandId: ID!, $etat: String!) {
  updateCommand(id: $updateCommandId, etat: $etat)
}
`;