import {Layout,Search}from "../../Router/AccueilRouter"
import ProductCategorie from "../../Components/Client/Produit_detaile/product-byCatgeorie.jsx"



export default function GetCategory(){
    

return <>
 
    <Search />
      <Layout>
         <ProductCategorie /> 
      </Layout>
    </>


}



