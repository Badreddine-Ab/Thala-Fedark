import { gql } from "@apollo/client";
export const Delete_Command = gql`
 mutation DeleteCommande($deleteCommandeId: ID!) {
  deleteCommande(id: $deleteCommandeId)
}
`;

export const Add_Command = gql`
mutation AddCommand( $quantite: Int!, $idUser: ID!,product: ID!: ID!) {
  AddCommand( quantite: $quantite, idUser: $idUser,product:product ) 
}
`;

export const Edite_Etat = gql`
mutation Mutation($updateCommandId: ID!, $etat: String!) {
  updateCommand(id: $updateCommandId, etat: $etat)
}
`;