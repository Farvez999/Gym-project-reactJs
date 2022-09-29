import React from 'react';
import './QandA.css'

const QandA = () => {
    return (
        <div className='qa-container'>
            <div>
                <h1 className="text-3xl font-bold">Qus 1 : How does react work?</h1>
                <p className='text-2xl'>While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                    Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
                    Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. </p>
            </div>

            <div>
                <h1 className="text-3xl font-bold mt-10">Qus 2 : What is the difference between state and props in React?</h1>
                <div className='text-2xl'>Use state to store the data your current page needs in your controller-view.

                    Use props to pass data & event handlers down to your child components.

                    These lists should help guide you when working with data in your components.

                    <p className="text-3xl font-bold">Props: </p>
                    <p>
                        1. Props are immutable. <br />
                        2. Props which lets React do fast reference checks.<br />
                        3. Props are used to pass data down from your view-controller.<br />
                        4. your top level component.<br />
                        5. Props have better performance.<br />
                        6. Props use this to pass data to child components.</p>


                    <p className="text-3xl font-bold">State: </p>
                    <p>
                        1. State should be managed in your view-controller.<br />
                        2. your top level component.<br />
                        3. State is mutable.<br />
                        4. State has worse performance.<br />
                        5. State should not be accessed from child components.<br />
                        6. State pass it down with props instead.<br />
                    </p>
                </div>
            </div>

            <div>
                <h1 className="text-3xl font-bold mt-10">Qus 3 : What is the use effect other than data load?</h1>
                <p className='text-2xl mb-10'>
                    1. useEffect() is for side-effects <br />
                    2. Dependencies argument<br />
                    3. Component lifecycle<br />
                    3.1 Component did mount<br />
                    3.2 Component did update<br />
                    5. Side-effect cleanup<br />
                    6. useEffect() in practice<br />
                    6.1 Fetching data</p>
            </div>
        </div>
    );
};

export default QandA;