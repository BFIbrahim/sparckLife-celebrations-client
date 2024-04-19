import React from 'react';

const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.postimg.cc/bvPgQPk7/img.jpg)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-[60%]">
                        <h1 className="mb-5 uppercase text-2xl md:text-4xl lg:text-4xl font-bold text-yellow-400">Make Your Events Shine with SparkLife Celebrations</h1>
                        <p className="mb-5">Turn Regular Events into Unforgettable Memories. Let Us Add Creativity and Style to Your Special Moments. Experience the SparkLife Celebrations Difference Today.</p>
                        <button className="btn border-none font-bold text-white bg-gradient-to-r from-red-500 to-orange-500">Take free consultation</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;