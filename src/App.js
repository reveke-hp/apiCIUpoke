import React from "react";
import {Fragment,useState} from "react";
import Header from "./components/Header/Header"
import Buscador from "./components/Buscador/Buscador";
import Pokedex from "./components/Pokedex/Pokedex";
import Logo from "./components/Logo";
import "./index.css"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"


function App(){
  return(
    <Router>
       <Header/>
        <Switch>
          <Route path="/" exact>
            <Logo/>
          </Route>
          <Route path="/components/Pokedex" exact>
              <Pokedex/>
          </Route>
          <Route path="/components/Buscador" exact>
              <Buscador/>
          </Route>
        </Switch>
    </Router>

    

   
    
    
  )


}

export default App;