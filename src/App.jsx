import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Interests from "./pages/Interests";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;