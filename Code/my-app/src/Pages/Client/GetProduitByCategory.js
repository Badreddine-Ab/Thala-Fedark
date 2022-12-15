import {Layout,Product,Search}from "../../Router/AccueilRouter"
import { useParams } from "react-router-dom";
import { Get_Categorie } from "../../Api/Query/QueryFindByCtegorie";


export default function GetCategory(){
    
    const{loading,data,error}=Get_Categorie(useParams())
    console.log(data,error,useParams());

return <>
 
    <Search />
      <Layout>
         <Product /> 
      </Layout>
    </>


}



