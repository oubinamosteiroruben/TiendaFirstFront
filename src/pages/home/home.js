import React from 'react';
import Construction from '../../components/construction/construction';
import './home.css';
import { ProgressSpinner } from 'primereact/progressspinner';

function Home() {
    return (
        <div className="home">
            <div>
                <ProgressSpinner />
                <Construction />
            </div>
        </div>
    );
}

export default Home;