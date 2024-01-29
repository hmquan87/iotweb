import '../css/header.css';
import { Link, Outlet } from 'react-router-dom';
import React from 'react';

function Header() {
    return (
        <div className="header">
            {/* <button className="button" type="button" style={{marginLeft:'225px'}}>DashBoard</button>
            <button className="button" type="button">DashBoard</button>
            <button className="button" type="button">DashBoard</button>
            <button className="button" type="button">DashBoard</button> */}
            <nav>
            <Link to="/">
                <button className="button" type="button" style={{ marginLeft: '405px' }}>DashBoard</button>
            </Link>
            <Link to="/datasensor">
                <button className="button" type="button">Data Sensor</button>
            </Link>
            <Link to="/history">
                <button className="button" type="button">History</button>
            </Link>
            <Link to="/profile">
                <button className="button" type="button">Profile</button>
            </Link>
            </nav>
            <Outlet/>
        </div>
    );
}



export default Header;