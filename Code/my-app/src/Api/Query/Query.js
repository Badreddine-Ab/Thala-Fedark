import {gql} from "@apollo/client";


export const Get_PRODUITS = gql`
query ListeProduit {
  produits(limit: 10) {
    id
    images
    name
    prix
    description
    categorie {
      name
    }
  }
}
`;

  
export const FIND_ALL_CATGORIE=gql`{
query MyQuery2 {
  categorie {
      name
      id
    }
}

}`;
  