import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Gym from '../Gym/Gym';
import './Home.css'

const Home = () => {
    const [gyms, setGyms] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('gym.json')
            .then(res => res.json())
            .then(data => setGyms(data));
    }, [])

    return (
        <div className='home-container'>
            <div className="gym-container">
                <Gym
                    gyms={gyms}
                    cart={cart}
                    setCart={setCart}
                ></Gym>
            </div>
            <div className="cart-container">

                <div className="profile-container">
                    <div className="profile">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://img.freepik.com/premium-vector/fitness-center-logo-sport-fitness-logo-design-gym-logo-icon-design-vector-stock_279597-366.jpg?w=2000" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">Farvez Hossen</h1>
                            <h1 className="text-1xl font-bold">Dhaka, Bangladesh</h1>
                        </div>
                    </div>

                    <div className="profile-details">
                        <div>
                            <h1 className="text-2xl font-bold">75kg</h1>
                            <h1 className="text-1xl font-bold">Weight</h1>
                        </div>

                        <div>
                            <h1 className="text-2xl font-bold">6.5</h1>
                            <h1 className="text-1xl font-bold">Height</h1>
                        </div>

                        <div>
                            <h1 className="text-2xl font-bold">25yr</h1>
                            <h1 className="text-1xl font-bold">Age</h1>
                        </div>
                    </div>


                </div>

                <div className="add-a-break-container">
                    <h1 className="text-2xl font-bold">Add A Break</h1>

                    <div className='break-time'>
                        <h1 className="rounded-full text-xl font-bold text-center">10s</h1>
                        <h1 className="rounded-full text-xl font-bold text-center">20s</h1>
                        <h1 className="rounded-full text-xl font-bold text-center">30s</h1>
                        <h1 className="rounded-full text-xl font-bold text-center">40s</h1>
                        <h1 className="rounded-full text-xl font-bold text-center">50s</h1>
                    </div>

                </div>

                <div className='exercise-details'>
                    <h1 className="text-xl font-bold text-left ml-10">Exercise Details</h1>
                </div>

                {
                    cart?.map((p) => (
                        <Cart p={p}></Cart>

                    ))
                }
            </div>
        </div>
    );
};

export default Home;