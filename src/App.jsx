import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
 

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-warmDark overflow-x-hidden font-sans">
        
        {/* Route views */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
        </Routes>

        {/* Floating global reservation CTA */}
        
        
      </div>
    </BrowserRouter>
  );
};

export default App;