import React from "react";
import {Layout,Toppage,Product,Categories,Recomende, Offre,Search,Button}from "../../Router/AccueilRouter"

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