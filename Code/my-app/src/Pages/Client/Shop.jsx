import React from "react";
import {
  Layout,
  Categorie,
  Sort,
  Search,
  Product,
  Price
} from "../../Router/ShopRouter";

function Accueil() {
  return (
    <>
      <Search />
      <Layout>
        <div className="container mt-15">
          <Sort />
          <div className="flex">
            <div className="col-span-1 bg-white px-8 pb-6 mx-4 my-8 shadow rounded overflow-hidden">
              <div className="divide-y divide-gray-200 space-y-5">
                <Categorie />
                {/* <Price /> */}
              </div>
            </div>
            <Product />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Accueil;
