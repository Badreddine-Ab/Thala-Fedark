import React from "react";
import {Layout,Toppage,Product,Categories,Recomende, Offre,Search}from "../../Router/AccueilRouter"

function Accueil() {
  return (
    <>
    <Search />
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