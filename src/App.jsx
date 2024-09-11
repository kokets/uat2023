import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home ,AboutUat,Leadership} from "./pages/Index";
function App() {
  return (
    <main>
      <Router basename="/uat2023">
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
