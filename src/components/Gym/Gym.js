import React from 'react';
import SingleGYM from '../SingleGYM/SingleGYM';
import './Gym.css'

const Gym = ({ gyms, cart, setCart }) => {
    console.log(gyms);
    return (

        <div>
            <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4'>
                {
                    gyms.map(gym => (
                        <SingleGYM
                            gym={gym}
                            key={gym.id}
                            cart={cart}
                            setCart={setCart}
                        ></SingleGYM>
                    ))
                }

            </div>
        </div >
    );
};

export default Gym;