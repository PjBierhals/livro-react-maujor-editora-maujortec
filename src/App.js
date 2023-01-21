import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topo from "./components/Topo";
import Frontend from "./components/Frontend";
import Programacao from "./components/Programacao";
import Design from "./components/Design";
import Catalogo from "./components/Catalogo";
import Principal from "./components/Principal";
import Rodape from "./components/Rodape";
import "./index.css";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Topo />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/frontend" element={<Frontend/>} />
            <Route path="/programacao" element={<Programacao/>} />
            <Route path="/design" element={<Design/>} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route element={NotFound}/>
          </Routes>
          <Rodape/>
        </>
      </Router>
      
    );
  }
}

export default App;
