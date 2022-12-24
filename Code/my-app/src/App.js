
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from './Pages/Client/accueil';
import GetCategory from './Pages/Client/GetProduitByCategory'
import SearchbyName from './Pages/Client/GetProduitByName'

import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import PageNotfound from './Pages/404.jsx'
import Upload from './Components/Client/upload'
import PageNotfound from './Pages/404.jsx';
import Produit from './Pages/Admin/produit'
import Command from './Pages/Admin/command'
import Cart from './Pages/Client/Cart';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/:id" element={<GetCategory />} />
        <Route path="search/:id" element={<SearchbyName />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotfound />} />
        <Route path="/up" element={<Upload />} />
        <Route path="/produit" element={<Produit />} />
        <Route path="/command" element={<Command />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
