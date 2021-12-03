import React, { useState } from 'react'
import './stylesComponents/Header.css';
import logo from '../medias/logo-site.png';
import logoZiziteurs from '../medias/logo-ziziteurs.png';
import rickroll from '../medias/rickroll-roll.gif';
import {Link, NavLink, BrowserRouter as Router } from 'react-router-dom';

function Header() {
    const [rec, setRec] = useState('');
    const [clique,setClique]=useState(0);
    const [visible, setVisible]=useState(false);
function clicked(){
    setClique(clique+1);
    console.log(clique);
    if(clique === 5){
        setVisible(!visible);
        setClique(0);
    }
    
}

function easterEgg(){
    if(visible){
        return "visible";
    }
    else{
        return null;
    }
}

    return (
        <div>
            <nav className="nav_header">
                <div className="div_header1">
                    <div className={"div_images " + easterEgg()} onClick={()=>clicked()} >
                        <img src={logo} className="logo_site" alt="logo_site" />
                        <img src={logoZiziteurs} className="logo_ziziteurs" alt="logo_ziziteurs" />
                        <img src = {rickroll} className = "troll"/>
                    </div>
                    <div className="recherche">
                        <Router>
                        <input type="text" name="recherche_content" placeholder="rechercher" className="barre_recherche" value={rec} onChange={(event) => setRec(event.target.value)} />
                        <Link to = {"/recherche/" + rec}> <input type="submit" value="🔎" className="bouton_recherche" onClick = "refresh"/> </Link>
                        </Router>
                    </div>
                </div>
                <div className="menu_container">
                    <ul className="menu_tab">
                        <Router>
                            <NavLink className="lien_home" activeStyle="active" to = "/" onClick = "refresh">
                                <li className="element_menu">Accueil</li>
                            </NavLink>
                            <NavLink className="lien_home" to="/recherche" activeStyle="active" onClick = "refresh">

                                <li  className="element_menu">Recherche</li>
                            </NavLink>
                            <NavLink className="lien_home" to="/sauveteurs" activeStyle="active" onClick = "refresh">

                                <li className="element_menu">Sauveteurs</li>
                            </NavLink>
                            <NavLink className="lien_home" to="/sauvetages" activeStyle="active" onClick = "refresh"> {/*ça c'est movai comme vous kiffez*/}

                                <li className="element_menu">Sauvetages</li>
                            </NavLink>
                            <NavLink className="lien_home" to="/login" activeStyle="active" onClick = "refresh">

                                <li className="element_menu">Login</li>
                            </NavLink>
                        </Router>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
