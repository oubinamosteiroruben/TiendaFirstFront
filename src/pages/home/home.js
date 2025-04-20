import React from 'react';
import Construction from '../../components/construction/construction';
import './home.css';

function Home() {
    return (
        <div className="home">
            <h1>Bienvenido a la tienda</h1>
            <div>
                <Construction />
            </div>
        </div>
    );
}

export default Home;