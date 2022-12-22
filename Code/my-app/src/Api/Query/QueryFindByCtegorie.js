
import { useQuery } from "@apollo/client";
import {gql} from "@apollo/client";

export const Get_BY_CATEGORIE = gql`
query Categorie($categorieId: ID!) {
categorie(id: $categorieId) {
  
  name
  products {
    images
    name
    prix
    id
  }
}
}`;
export const Get_One_PRODUIT = gql`
query Product($productId: ID!) {
  product(id: $productId) {
    description
    images
    name
    prix
     categorie {
      name
    }
  }
}
`;
export const Get_Categorie=(categorieId)=>{
  return useQuery(Get_BY_CATEGORIE,{
        variables:{
            categorieId,
        }
    })
}
export const Get_Product=(productId)=>{
  return useQuery(Get_One_PRODUIT,{
        variables:{
          productId,
        }
    })
}