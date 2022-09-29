import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { p } = props;
    console.log(p.time)

    let total = 0;
    // for (const time of p) {
    //     console.log(time)
    // }

    // for (const time of p) {
    //     // total = total + time;
    //     console.log(time)
    // }

    return (
        <div>
            <div className="cart-info-container">
                <p className='text-xl font-bold'>Exercise time: {total}</p>
            </div>
        </div>

    );
};

export default Cart;