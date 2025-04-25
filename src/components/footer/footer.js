import React from "react";
import './footer.css';
import { Cpu } from "lucide-react";

function Footer(){
    return(
        <footer className="footer">
            <span>2025 Clorofeel.</span>
            <Cpu size={12} />
            <span>Desarrollado por Rubén Oubiña</span>
            <a className="linkedin-link" href="https://www.linkedin.com/in/oubinamosteiroruben/" target="_blank">
                <i className="pi pi-linkedin"></i>
            </a>
        </footer>
    );
}

export default Footer;