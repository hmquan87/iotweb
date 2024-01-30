

import React, { useState } from 'react';
import '../css/header.css';
import { Link, Outlet } from 'react-router-dom';

function Header() {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div className="header">
            <nav>
                <Link to="/">
                    <button
                        className={`button ${activeButton === 'dashboard' ? 'active' : ''}`}
                        type="button"
                        onClick={() => handleButtonClick('dashboard')}
                        style={{marginLeft: '380px'}}
                    >
                        DashBoard
                    </button>
                </Link>
                <Link to="/datasensor">
                    <button
                        className={`button ${activeButton === 'datasensor' ? 'active' : ''}`}
                        type="button"
                        onClick={() => handleButtonClick('datasensor')}
                    >
                        Data Sensor
                    </button>
                </Link>
                <Link to="/history">
                    <button
                        className={`button ${activeButton === 'history' ? 'active' : ''}`}
                        type="button"
                        onClick={() => handleButtonClick('history')}
                    >
                        History
                    </button>
                </Link>
                <Link to="/profile">
                    <button
                        className={`button ${activeButton === 'profile' ? 'active' : ''}`}
                        type="button"
                        onClick={() => handleButtonClick('profile')}
                    >
                        Profile
                    </button>
                </Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default Header;
