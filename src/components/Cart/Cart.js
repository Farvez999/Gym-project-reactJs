import React, { useState } from 'react';
import Break from '../Break/Break';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart)

    let time = 0;
    for (const p of cart) {
        time = time + parseInt(p.time)
    }


    const [breaktime, setbreaktime] = useState(localStorage.getItem("Break Time"));
    const addToBreak = (event) => {
        localStorage.setItem("Break Time", event.target.innerText);
        setbreaktime(event.target.innerText)
    }

    return (
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
                <Break
                    addToBreak={addToBreak}
                ></Break>

            </div>

            <div className='exercise-details'>
                <h1 className="text-xl font-bold text-left ml-10">Exercise Details</h1>
            </div>

            <div className='cart'>
                <div className="cart-info-container">
                    <p className='text-xl font-bold'>Exercise time: {time}s</p>
                </div>

                <div className='break'>
                    <p className='text-xl font-bold'>Break Time: {breaktime}</p>
                </div>
            </div>
        </div>

    );
};

export default Cart;