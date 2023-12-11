import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Recettes from "./Recettes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/recettes' element={<Recettes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
