import React from "react";
import iconShop from "../../assets/images/icon_shop.png";
import "./navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={iconShop} alt="Tienda" className="navbar-brand" />
                <span>Tienda</span>
            </div>
            <div className="navbar-links">
                <a className="nav-link" href="/">Inicio</a>
            </div>
        </nav>
    );
}

export default Navbar;