import './css/header.css';
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
                <Link to='/' className="button" style={{marginLeft:'225px'}}>Dashboard</Link>
                <Link to='/click' className="button">Dashboard</Link>
                <Link to='/' className="button">Dashboard</Link>
                <Link to='/' className="button" >Dashboard</Link>
            </nav>
            <Outlet/>
        </div>
    );
}



export default Header;