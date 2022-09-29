import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Gym from '../Gym/Gym';
import './Home.css'

const Home = () => {
    const [gyms, setGyms] = useState([]);

    const [cart, setCart] = useState([]);

    const handleAddToList = (gym) => {
        console.log(gym)
        const newCart = [...cart, gym]
        setCart(newCart)
    }

    useEffect(() => {
        fetch('gym.json')
            .then(res => res.json())
            .then(data => setGyms(data));
    }, [])




    return (
        <div className='home-container'>
            <div className="gym-container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4'">
                {
                    gyms.map(gym => (
                        <Gym
                            gym={gym}
                            key={gym.id}
                            handleAddToList={handleAddToList}
                        ></Gym>
                    ))
                }
            </div>

            <div>
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;