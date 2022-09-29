import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(cart)

    let time = 0;
    for (const p of cart) {
        time = time + parseInt(p.time)
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

            <div className='cart'>
                <div className="cart-info-container">
                    <p className='text-xl font-bold'>Exercise time: {time}s</p>
                </div>
            </div>
        </div>

    );
};

export default Cart;