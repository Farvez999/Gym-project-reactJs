import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
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

            <div className="profile-container">
                <div className="profile">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="https://scontent.fcla4-1.fna.fbcdn.net/v/t39.30808-6/287244971_1691150377895989_4214447273979079372_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=R9qQw4mdRIIAX97s6TD&_nc_ht=scontent.fcla4-1.fna&oh=00_AT8yuOUkIGC7l56Q4x7Pv84pJ7LE6qU5Vh-GjynkkqRyJA&oe=633A54CE" />
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
        </div>

    );
};

export default Cart;