import React from "react";
import "./headerStyle.css";
import { Link } from "react-router-dom";

const Header = () =>{


    return(
        <div className="titulo">
           <h1>Wiki-pokemon</h1>
           <div className="links">
           <Link to="/" className="btn">
                Inicio
            </Link>
            <Link to="/components/Pokedex" className="btn">
                Pokedex
            </Link>
            <Link to="/components/Buscador" className="btn">
                Buscar Pokemon
            </Link>
            </div>
        </div>
    )
}

export default Header;