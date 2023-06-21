import Dados from "./pages/Dados";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

function App() {

  return (
    <div>
      <BrowserRouter>
 <Routes>
 <Route path="/" element={<Home/>}/>
 <Route path="/Dados" element={<Dados/>}/>
 <Route path="/Contato" element={<Contato/>}/>
 </Routes>
 </BrowserRouter>
    </div>
  )
}

export default App;