import { Link } from "react-router-dom";
import { useState } from "react";
import { Get_PRODUITS } from "../../../Api/Query/Query";
import { useQuery } from "@apollo/client";
import card from "./cart"

function Search() {
  const [search, setSearch] = useState("");

  const { data, error, loading } = useQuery(Get_PRODUITS);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>something went wrong...</div>;


  return (
    <div>
      <header className="py-4 shadow-sm bg-white">
        <div className="container flex items-center justify-between">
          <span className="text-primary">THALA</span>
          <div className="w-full max-w-xl relative flex">

            <div className=" flex cursor-pointer relative group z-10">
              <input
                type="text"
                name="search"
                id="search"
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-primary  pl-12 py-3 pr-3 rounded-md focus:outline-none"
                placeholder="search"
              />

              <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                <p className="flex items-center px-6 py-3 hover:bg-white transition top-full	">
                  <span className="ml-6 text-gray-600 text-sm">
                    <div className="">
                      {data.products
                        .filter((val) => {
                          if (search == "") return val;
                          else if (
                            val.name
                              .toLowerCase()
                              .includes(search.toLowerCase())
                          ) {
                            return val;
                          }
                        })
                        .map((val, key) => {
                          return (
                            <>
                              <div className="flex items-center  hover:bg-gray-100 transition">
                                <Link to={`search/${val.id}`}>
                                  <p
                                    key={key}
                                    className="flex  px-2 py-3 hover:bg-gray-100 transition"
                                  >
                                    <span className="ml-6 text-gray-600 text-sm px-6 py-2">
                                      {val.name}
                                    </span>
                                  </p>
                                </Link>
                              </div>
                            </>
                          );
                        })}
                    </div>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <i className="fa-regular fa-heart"></i>
              </div>
              <div className="text-xs leading-3">Wishlist</div>
              {/* <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs"></div> */}
            </a>
            <Link to="/cart">
              <a
                href="#"
                className="text-center text-gray-700 hover:text-primary transition relative"
              >
                <div className="text-2xl">
                  <i className="fa-solid fa-bag-shopping"></i>
                </div>
                <div className="text-xs leading-3">Cart</div>
              </a>
            </Link>
            <a
              href="#"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <i className="fa-regular fa-user"></i>
              </div>
              <div className="text-xs leading-3">Account</div>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Search;
