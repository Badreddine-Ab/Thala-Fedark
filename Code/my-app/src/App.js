
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from './Pages/Client/accueil';
import PageProcuct from './Components/Client/product';



function App() {
  return (
    <h1 className="text-3xl font-bold ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/PageProcuct" element={<PageProcuct />} />

        </Routes>
      </BrowserRouter>
    </h1>
       
  );
}

export default App;
