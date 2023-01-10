import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import More from "./more";
import Services from "./services";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<More />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
