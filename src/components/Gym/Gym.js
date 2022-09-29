import React, { useState } from 'react';
import SingleGYM from '../SingleGYM/SingleGYM';
import './Gym.css'

const Gym = ({ gym, handleAddToList }) => {

    return (

        <div>
            <div>
                <SingleGYM
                    gym={gym}
                    key={gym.id}
                    handleAddToList={handleAddToList}
                ></SingleGYM>


            </div>
        </div >
    );
};

export default Gym;