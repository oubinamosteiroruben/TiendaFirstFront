import React from "react";
import { Leaf, Flower, TreePine, Sprout, Droplet, Sun } from 'lucide-react';
import "./navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left-side"></div>
            <div className="navbar-brand">
                <Sprout size={24} />
                <h1>Clorofeel</h1>
                <Sprout size={24} />
            </div>
            <div className="navbar-right-side">
                <div className="nav-links">
                    <a href="/">Inicio</a>
                    <a href="/about">Sobre nosotros</a>
                </div>
            </div>
            
        </nav>
    );
}

export default Navbar;