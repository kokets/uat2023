import React from "react";
import {  HashRouter  as Router, Routes,Route } from "react-router-dom";
import { Home ,AboutUat,Leadership} from "./pages/Index";
function App() {
  return (
    <main>
      <Router >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUat" element={<AboutUat />} />
          <Route path="/Leadership" element={<Leadership />} />
        </Routes>
      </Router>
    </main>
  );
}
export default App;
