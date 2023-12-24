import React from "react";
import "./styles/css/styles.css";
import * as Organisms from "./components/organisms"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as Pages from "./components/pages";

function App() {
  return (
    <div className="App">


      <Router>

        <Organisms.Header />

        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="/Routing" element={<Pages.Routing />} />
          <Route path="/Form" element={<Pages.Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
