
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Client/header';

function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      {/* Hello world! */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </h1>
       
  );
}

export default App;
