
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from './Pages/Client/accueil';
import GetCategory from './Pages/Client/GetProduitByCategory'
import SearchbyName from './Pages/Client/GetProduitByName'
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import PageNotfound from './Pages/404.jsx'


function App() {
  return (
    <h1 className="text-3xl font-bold ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/:id" element={<GetCategory />} />
          <Route path="search/:id" element={<SearchbyName />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="*" element={<PageNotfound/>}/>
        </Routes>
      </BrowserRouter>
    </h1>
       
  );
}

export default App;
