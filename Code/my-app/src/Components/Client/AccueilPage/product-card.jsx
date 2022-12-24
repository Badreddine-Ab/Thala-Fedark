import { useQuery } from "@apollo/client";
import { Get_PRODUITS } from "../../../Api/Query/Query";
import { Link } from "react-router-dom";
export default function Product() {
  let { error, data, loading } = useQuery(Get_PRODUITS);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>something went wrong...</div>;
  return (
    <>
      <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          Article
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {data.products.map((produit, i) => {
            return (
              <div key={i}>
                <div className="bg-white shadow rounded overflow-hidden group">
                  <div className="relative">
                    <img
                      src={produit.images}
                      alt="product 1"
                      className="w-full"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                      <Link to={`search/${produit.id}`}>
                        <p
                          className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                          title="view product"
                        >
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </p>
                      </Link>

                      <a
                        href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                        title="add to wishlist"
                      >
                        <i className="fa-solid fa-heart"></i>
                      </a>
                    </div>
                  </div>
                  <div className="pt-4 pb-3 px-4">
                    <a href="#">
                      <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                        {produit.name}
                      </h4>
                    </a>
                    <div className="flex items-baseline mb-1 space-x-2">
                      <p className="text-xl text-primary font-semibold">
                        {produit.prix}DH
                      </p>
                      <p className="text-sm text-gray-400 line-through">
                        $55.90
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="flex gap-1 text-sm text-yellow-400">
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-star"></i>
                        </span>
                      </div>
                      <div className=" text-gray-500 ml-3">
                        {produit.categorie.name}
                      </div>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
