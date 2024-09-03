import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home ,AboutUat} from "./pages/Index";
function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUat" element={<AboutUat />} />
        </Routes>
      </Router>
    </main>
  );
}
export default App;
