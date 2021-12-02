import React from 'react'
import './stylesComponents/Header.css';
import logo from '../medias/logo-site.png';
import logoZiziteurs from '../medias/logo-ziziteurs.png';

function Header() {
    return (
        <div>
            <nav className = "nav_header">
                <div className="div_header1">
                    <div className="div_images">
                        <img src = {logo} className="logo_site" alt="logo_site" />
                        <img src = {logoZiziteurs} className="logo_ziziteurs" alt="logo_ziziteurs" />
                    </div>
                    <div className = "recherche">
                        <input type = "text" name = "recherche_content" />
                        <input type = "submit" value = "🔎"/>

                    </div>
                </div>
                <div className="menu_container">
                    <ul className="menu_tab">
                        <li className="element_menu">Accueil</li>
                        <li className="element_menu">Recherche</li>
                        <li className="element_menu">Sauveteurs</li>
                        <li className="element_menu">Sauvetages</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
