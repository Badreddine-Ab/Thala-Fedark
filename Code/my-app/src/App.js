
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from './Pages/Client/accueil';
import GetCategory from './Pages/Client/GetProduitByCategory'




function App() {
  return (
    <h1 className="text-3xl font-bold ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/:id" element={<GetCategory />} />
        </Routes>
      </BrowserRouter>
    </h1>
       
  );
}

export default App;
