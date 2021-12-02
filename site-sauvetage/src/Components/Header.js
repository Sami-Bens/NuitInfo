import React from 'react'
import './stylesComponents/Header.css';

function Header() {
    return (
        <div>
            <nav>
                <div className = "div__images">
                    <img className = "logo_site_1" alt = "logo_site_1"/>
                    <img className = "logo_site_2" alt = "logo_site_2"/>
                    <img className = "logo_ziziteurs" alt = "logo_ziziteurs"/>
                </div>
                <div className = "menu_container">
                    <ul className = "menu_tab">
                        <li className = "element_menu">Accueil</li>
                        <li className = "element_menu">Recherche</li>
                        <li className = "element_menu">Sauveteurs</li>
                        <li className = "element_menu">Sauvetages</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
