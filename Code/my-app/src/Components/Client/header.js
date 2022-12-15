import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {Get_PRODUITS} from "../../Api/Query/Query"

export default function Header() {
  //   const navigate = useNavigate();
  //   function logOut() {
  //     localStorage.clear();
  //     navigate("/login");
  //   }

  const {error,data,loading } = useQuery(Get_PRODUITS);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>something went wrong...</div>;
  

  return (
    <>
      <div>
        <div>
          <nav className="bg-gray-800">
            <div className="container flex">
              <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
                <span className="text-white">
                  <i className="fa-solid fa-bars"></i>
                </span>
                <span className="capitalize ml-2 text-white">
                  All Categories
                </span>

       
                            
               <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">

                 
                  {data.produits.map((produit, i) => {
            return (
               
               <Link to ={`/${produit.id}`}>
 <p key={i}  
                    className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                  >
                    <span className="ml-6 text-gray-600 text-sm">{produit.name}</span>

                  </p> 
                   
               </Link>
                 
  
                    
             
            );
          })} 
                
                </div> 
          
              </div>

              <div className="flex items-center justify-between flex-grow pl-12">
                <div className="flex items-center space-x-6 capitalize">
                  <a
                    href="index.html"
                    className="text-gray-200 hover:text-white transition"
                  >
                    Home
                  </a>
                  <a
                    href="pages/shop.html"
                    className="text-gray-200 hover:text-white transition"
                  >
                    Shop
                  </a>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-white transition"
                  >
                    About us
                  </a>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-white transition"
                  >
                    Contact us
                  </a>
                </div>
                <a
                  href="pages/login.html"
                  className="text-gray-200 hover:text-white transition"
                >
                  Login
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
