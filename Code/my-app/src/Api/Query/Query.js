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
      etat
      prixTotal
      id
      quantite
      user {
        name
        email
      }
    }
  }
`;
