import React, { useEffect, useState } from 'react';
import Gym from '../Gym/Gym';
import './Home.css'

const Home = () => {
    const [gyms, setGyms] = useState([]);

    useEffect(() => {
        fetch('gym.json')
            .then(res => res.json())
            .then(data => setGyms(data));
    }, [])

    return (
        <div className='home-container'>
            <div className="gym-container">
                <Gym gyms={gyms}></Gym>
            </div>
            <div className="cart-container">
                <h1>This is Cart</h1>
            </div>
        </div>
    );
};

export default Home;