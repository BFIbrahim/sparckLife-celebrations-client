import React from 'react';

const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.staticmb.com/mbcontent/images/uploads/2022/5/wedding%20stage%20decoration.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl font-bold">Make Your Events Shine with SparkLife Celebrations</h1>
                        <p className="mb-5">Turn Regular Events into Unforgettable Memories. Let Us Add Creativity and Style to Your Special Moments. Experience the SparkLife Celebrations Difference Today.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;