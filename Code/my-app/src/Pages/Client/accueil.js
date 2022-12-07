import React from "react";
import Layout from "../../Components/Client/layout";
import Toppage from '../../Components/Client/AccueilPage/Toppage'
import Product from "../../Components/Client/AccueilPage/product-card";
import Categories from "../../Components/Client/AccueilPage/categorie";
import Recomende from "../../Components/Client/AccueilPage/Recomended";
import Offre from "../../Components/Client/AccueilPage/offre";

function Accueil() {
  return (
    <>
      <Layout>
        <Toppage />
         <Categories />
         <Product />
         <Offre/>
         <Recomende />
      </Layout>
    </>
  );
}

export default Accueil;