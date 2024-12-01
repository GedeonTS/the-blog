import "./App.css";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/post/:id" element={<Blog />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
