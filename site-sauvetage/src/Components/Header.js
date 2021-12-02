import React from 'react'
import './stylesComponents/Header.css';
import logo from '../medias/logo-site.png';
import logoZiziteurs from '../medias/logo-ziziteurs.png';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';

function Header() {
    return (
        <div>
            <nav className="nav_header">
                <div className="div_header1">
                    <div className="div_images">
                        <img src={logo} className="logo_site" alt="logo_site" />
                        <img src={logoZiziteurs} className="logo_ziziteurs" alt="logo_ziziteurs" />
                    </div>
                    <div className="recherche">
                        <input type="text" name="recherche_content" placeholder="rechercher" />
                        <input type="submit" value="🔎" />

                    </div>
                </div>
                <div className="menu_container">
                    <ul className="menu_tab">
                        <Router>
                            <NavLink className="lien_home" to="/" ActiveStyle="active">
                                <li className="element_menu">Accueil</li>
                            </NavLink>
                            <NavLink className="lien_home" to="/recherche" ActiveStyle="active">

                                <li className="element_menu">Recherche</li>
                            </NavLink>
                            <NavLink className="lien_home" to="/sauveteurs" ActiveStyle="active">

                                <li className="element_menu">Sauveteurs</li>
                            </NavLink>
                            <NavLink className="lien_home" to="/sauvetages" ActiveStyle="active">

                                <li className="element_menu">Sauvetages</li>
                            </NavLink>
                        </Router>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
