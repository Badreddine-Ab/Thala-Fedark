import {gql} from "@apollo/client"
export const FIND_ALL_Commande=gql`
subscription Subscription {
  Selectcommande {
    prixTotal
    id
    etat
    quantite
    user {
      id
      name
    }
  }
}
`