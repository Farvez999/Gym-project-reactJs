import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className="avatar">
                <div className="w-24 rounded-full">
                    <img src="https://img.freepik.com/premium-vector/fitness-center-logo-sport-fitness-logo-design-gym-logo-icon-design-vector-stock_279597-366.jpg?w=2000" />
                </div>
            </div>
            <h1 className="text-3xl font-bold">GYM FITNESS</h1>
        </div>
    );
};

export default Header;