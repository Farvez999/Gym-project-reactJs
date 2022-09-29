import React from 'react';
import './Break.css'

const Break = ({ addToBreak }) => {
    return (
        <div>
            <h1 className="text-2xl font-bold">Add A Break</h1>

            <div onClick={addToBreak} className='break-time'>
                <h1 className="rounded-full text-xl font-bold text-center">10s</h1>
                <h1 className="rounded-full text-xl font-bold text-center">20s</h1>
                <h1 className="rounded-full text-xl font-bold text-center">30s</h1>
                <h1 className="rounded-full text-xl font-bold text-center">40s</h1>
                <h1 className="rounded-full text-xl font-bold text-center">50s</h1>
            </div>
        </div>
    );
};

export default Break;