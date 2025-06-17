import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Interests from "./pages/Interests";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interests" element={<Interests />} />
      </Routes>
    </Router>
  );
};

export default App;