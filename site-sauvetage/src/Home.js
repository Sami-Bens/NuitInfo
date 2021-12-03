import React from 'react'
import './Home.css';
import DeleteButton from './Components/DeleteButton';
import UpdateButton from './Components/UpdateButton';

const Home = () => {
    return (
        <div>
            Voici l'accueil
            <DeleteButton/>
            <UpdateButton/>
        </div>
    )
}

export default Home;
