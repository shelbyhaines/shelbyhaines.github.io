import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Interests from "./pages/Interests";
import Contact from "./pages/Contact";
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;