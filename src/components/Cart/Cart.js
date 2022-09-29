import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Break from '../Break/Break';
import Profile from '../Profile/Profile';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    let time = 0;
    for (const p of cart) {
        time = time + parseInt(p.time)
    }


    const [breaktime, setBreakTime] = useState(localStorage.getItem("Break Time"));
    const addToBreak = (event) => {
        localStorage.setItem("Break Time", event.target.innerText);
        setBreakTime(event.target.innerText)
    }

    const notify = () => toast.success('🦄 Wow Activity Completed!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    return (
        <div className="cart-container">

            <Profile></Profile>

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

            <div className='activity-completed'>
                <button onClick={notify} className="btn btn-primary font-bold text-black text-xl mt-10">Activity Completed</button>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover></ToastContainer>
            </div>
        </div>

    );
};

export default Cart;