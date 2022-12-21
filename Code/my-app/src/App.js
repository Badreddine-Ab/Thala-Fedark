
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from './Pages/Client/accueil';
import GetCategory from './Pages/Client/GetProduitByCategory'
import SearchbyName from './Pages/Client/GetProduitByName'
import Cart from './Pages/Client/Cart';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/:id" element={<GetCategory />} />
        <Route path="search/:id" element={<SearchbyName />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
