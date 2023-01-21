import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topo from "./components/Topo";
import Frontend from "./components/Frontend";
import Programacao from "./components/Programacao";
import Design from "./components/Design";
import Catalago from "./components/Catalogo";
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
            <Route exact path="/" render={Home} />
            <Route path="/frontend" render={Frontend} />
            <Route exact path="/programacao" render={Programacao} />
            <Route exact path="/design" render={Design} />
            <Route exact path="/catalogo" render={(props) => <Catalago />} />
            <Route component={NotFound}/>
          </Routes>
        </>
      </Router>
    );
  }
}

export default App;
