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
            <Link to="/click">
                <button className="button" type="button">Click History</button>
            </Link>
            <Link to="/page3">
                <button className="button" type="button">Page 3</button>
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