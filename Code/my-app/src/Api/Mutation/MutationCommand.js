import { gql } from "@apollo/client";
export const Delete_Command = gql`
 mutation DeleteCommande($deleteCommandeId: ID!) {
  deleteCommande(id: $deleteCommandeId)
}
`;