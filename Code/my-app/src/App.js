import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from './Pages/Client/accueil';
import GetCategory from './Pages/Client/GetProduitByCategory'
import SearchbyName from './Pages/Client/GetProduitByName'
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import PageNotfound from './Pages/404.jsx'
import Upload from './Components/Client/upload'
import Produit from './Pages/Admin/produit'
import Command from './Pages/Admin/command'
import Shop from "./Pages/Client/Shop";
import Test from "./Pages/Admin/test"
import Product from "./Pages/Admin/Product"
import Categorie from "./Pages/Admin/Categorie"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/:id" element={<GetCategory />} />
          <Route path="search/:id" element={<SearchbyName />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="*" element={<PageNotfound/>}/>
          <Route path="/up" element={<Upload/>}/>
          <Route path="/produit" element={<Produit/>}/>
          <Route path="/command" element={<Command/>}/>
          <Route path="/Table" element={<Test />}/>
          <Route path="/product" element={<Product />}/>
          <Route path="/categorie" element={<Categorie />}/>
        </Routes>
      </BrowserRouter>
  
       
  );
}

export default App;
