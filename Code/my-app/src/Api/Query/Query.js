import { gql } from "@apollo/client";

export const Get_PRODUITS = gql`
  query ListeProduit {
    products {
      id
      images
      name
      prix
      stock
      ventes
      ventes_promo
      description
      categorie {
        name
        id
      }
    }
  }
`;


export const FIND_ALL_CATGORIE = gql`
  query Categorie {
    categories {
      id
      name
    }
  }
`;

export const FIND_ALL_Commande = gql`
 query Querycommande {
  Querycommande {
    commande {
      etat
      prixTotal
      id
      prixTotal
      quantite
      user {
        name
        email
      }
    }
    id
    product {
      name
      id
      prix
      stock
    }
  }
}
`;

export const CountCommande = gql`
 query Query {
  Countcommande
}
`;
