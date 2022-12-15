
import { useQuery } from "@apollo/client";
import {gql} from "@apollo/client";

export const Get_One_PRODUITS = gql`
query ListeProduit($id:ID!) {
  query produits_by_pk {
  produits_by_pk(id:$id) {
    description
    images
    name
    prix
  }
}
}
`;
export const Get_Categorie=(id)=>{
    const{data,error,loading}=useQuery(Get_One_PRODUITS,{
        variables:{
id
        }
    })
    
    return{
data,error,loading
    }
}