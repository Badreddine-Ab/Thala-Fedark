import React from "react";
import Cart from "../../Components/Client/AccueilPage/cart"
import Search from "../../Components/Client/AccueilPage/Search"
import Layout from "../../Components/Client/layout"

function Accueil() {
  return (
    <>
      <Search />
      <Layout>
        <Cart />
      </Layout>
    </>
  );
}

export default Accueil;