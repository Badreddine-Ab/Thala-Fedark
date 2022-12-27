import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {FIND_ALL_CATGORIE} from "../../Api/Query/Query"

export default function Header() {
  const token = localStorage.getItem("token")
  const navigate =useNavigate()
  const {error,data,loading } = useQuery(FIND_ALL_CATGORIE);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>something went wrong...</div>;
  

  return (
    <>
      <div>
        <div>
          <nav className="bg-gray-800">
            <div className="container flex">
              <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group z-10">
                <span className="text-white">
                  <i className="fa-solid fa-bars"></i>
                </span>
                <span className="capitalize ml-2 text-white">
                  All Categories
                </span>

       
                            
               <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">

                 
                  {data.categories.map((categorie, i) => {
            return (
               
               <Link to ={`/${categorie.id}`}>
                   <p key={i}  
                    className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                  >
                    <span className="ml-6 text-gray-600 text-sm">{categorie.name}</span>

                  </p> 
                   
               </Link>
                 
  
                    
             
            );
          })} 
                
                </div> 
          
              </div>

              <div className="flex items-center justify-between flex-grow pl-12">
                {
                  token ?
                  <>
                <div className="flex items-center space-x-6 capitalize">
                <Link to="/">
                  <a
                    href=""
                    className="text-gray-200 hover:text-white transition"
                  >
                    Home
                  </a>
                  </Link>
                    <Link to ="shop">
                    <p  
                    className="text-gray-200 hover:text-white transition"
                  >
                    Shop
                  </p>
                   
               </Link>
                  <a
                    href=""
                    className="text-gray-200 hover:text-white transition"
                  >
                    About us
                  </a>
                  <a
                    href=""
                    className="text-gray-200 hover:text-white transition"
                  >
                    Contact us
                  </a>
                </div>
                <a
                  onClick={()=>{
                    localStorage.removeItem("token")
                    navigate('/login')
                  }}
                  className="text-gray-200 hover:text-white transition"

                >
                  Logout
                </a>
                </>:
                <>
                <div></div>
                <Link to="/login">
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition"
                >
                  Login
                </a>
                </Link>
                </>
                }
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
