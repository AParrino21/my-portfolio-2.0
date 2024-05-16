import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
