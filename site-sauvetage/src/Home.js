import React from 'react'
import './Home.css';
import carte from './medias/carte.jpg';
import dossier from './medias/dossier.png';
import Journal from './medias/Journal.png';

const Home = () => {
    return (
        <div className = "homeContainer">
            <p className="intro">Bienvenue sur le site des sauveteurs du dunkerquois. Ce site rend hommage aux femmes, hommes et enfants qui ont réalisé des actes de sauvetages en milieu aquatique.
                Ces sauveteurs, habitants du dunkerquois (de Bray-Dunes à Grand-Fort-Philippe), ont participé à plus de 900 sauvetages en mer et plus de 1100 sauvetages individuels.
                Œuvrant avec courage, abnégation et souvent au mépris du risque ils méritent amplement que leurs actes soient pérennisés.</p>
            <div className="test">  
            <div className ="Carte">
                <img src={carte} className="carte" alt="carte" />
            </div>
            <div className=" Double_img">
                <img src={dossier} className="dossier" alt="dossier" />
                <img src={Journal} className="Journal" alt="Journal" />
            </div>
            </div>
        </div>
    )
}

export default Home;
