import React from 'react';
import './SingleGYM.css'

const SingleGYM = ({ gym }) => {
    const { id, name, description, age, time, img } = gym;
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure><img className='w-96 h-60' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>For Age : {age}</p>
                    <p>Time required : {time}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to list</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleGYM;