import React from 'react';

const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.staticmb.com/mbcontent/images/uploads/2022/5/wedding%20stage%20decoration.jpg)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-2xl md:text-4xl lg:text-4xl font-bold text-yellow-400">Make Your Events Shine with SparkLife Celebrations</h1>
                        <p className="mb-5">Turn Regular Events into Unforgettable Memories. Let Us Add Creativity and Style to Your Special Moments. Experience the SparkLife Celebrations Difference Today.</p>
                        <button className="btn border-none font-bold text-white bg-gradient-to-r from-indigo-400 to-cyan-400">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;