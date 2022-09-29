import React from 'react';
import './Profile.css'

const Profile = () => {
    return (
        <div>
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
        </div>
    );
};

export default Profile;