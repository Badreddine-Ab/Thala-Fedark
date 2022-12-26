import React from "react";
import Search from "../../Components/Client/AccueilPage/Search"
import Layout from "../../Components/Client/layout"
import Checkout from "../../Components/Client/AccueilPage/checkout";

function Accueil() {
  return (
    <>
      <Search />
      <Layout>
        <Checkout />
      </Layout>
    </>
  );
}

export default Accueil;