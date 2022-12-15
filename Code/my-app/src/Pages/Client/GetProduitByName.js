import {Layout,Search}from "../../Router/AccueilRouter"
import ProduitsDetails from "../../Components/Client/Produit_detaile/ProduitsDetails"
import Button from "../../Components/Client/button";


import { useParams } from "react-router-dom";
import { Get_Categorie } from "../../Api/Query/QueryFindByCtegorie";


export default function SearchbyName(){
    
    const{loading,data,error}=Get_Categorie(useParams())
    console.log(data,error,useParams());

return <>
 
    <Search />
      <Layout>
         <ProduitsDetails> <Button /></ProduitsDetails>
      </Layout>
    </>


}



