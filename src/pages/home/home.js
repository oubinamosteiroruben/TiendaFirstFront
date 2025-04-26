import React , {useState} from 'react';
import Construction from '../../components/construction/construction';
import './home.css';
import { ProgressSpinner } from 'primereact/progressspinner';
import HorizontalSelector from '../../components/horizontalSelector/horizontalSelector';
import TopVentas from './components/topVentas/topVentas';

function Home() {

    const [selectedOption, setSelectedOption] = useState(0);

    const options = [
        {
            label: "Top Ventas",
            onClick: () => {
                setSelectedOption(0);
            },
        },
        {
            label: "Todas las Categorías",
            onClick: () => {
                setSelectedOption(1);
            },
        }
    ];

    const renderContent = () => {
        switch (selectedOption) {
            case 0:
                return <TopVentas />;
            case 1:
                return <Construction />;
            default:
                return <ProgressSpinner />;
        }
    };

    return (
        <div className="home">
            <div className="content">
                <HorizontalSelector options={options} selectedOption={selectedOption} />
                {renderContent()}
            </div>
        </div>
    );
}

export default Home;