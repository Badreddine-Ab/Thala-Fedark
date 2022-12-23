import {Layout,Search}from "../../Router/AccueilRouter"
import ProduitsDetails from "../../Components/Client/Produit_detaile/ProduitsDetails"
import Button from "../../Components/Client/button";





export default function SearchbyName(){
    
  

return <>
 
    <Search />
      <Layout>
         <ProduitsDetails> <Button /></ProduitsDetails>
      </Layout>
    </>


}



