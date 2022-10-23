import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 mb-6">
                <div className=" flex-1"></div>
                <div className="flex-1">
                    <ul className="menu menu-horizontal p-0">
                        <li><NavLink to='/login'>Login</NavLink></li>
                        <li><NavLink to='/register'>register</NavLink></li>
                    </ul>
                    <div className=" flex-1"></div>
                </div>
            </div>
        </div>

    );
};

export default NavBar;