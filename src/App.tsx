import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./Header";
import Spells from "./Spells";
import Houses from "./Houses";
import Books from "./Books";
import Characters from "./Characters";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/spells" element={<Spells />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/books" element={<Books />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
