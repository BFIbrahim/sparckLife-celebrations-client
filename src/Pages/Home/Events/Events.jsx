import React from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";

const Events = () => {
    return (
        <div className='w-[90%] mx-auto mb-10'>
            <div className='text-center mb-10 border-b-2 border-slate-300 w-90% md:w-1/2 lg:w-1/2 mx-auto'>
                <h1 className='text-2xl md:text-4xl lg:text-4xl uppercase font-semibold text-yellow-500 italic'>Top Events</h1>
                <p>Here is top events of our life</p>
            </div>

            <div>
                <div className='md:grid md:grid-cols-2 lg:gap-10 gap-10 items-center'>
                    <div>
                        <img className='rounded-md' src="https://i.postimg.cc/x8fn7Pqp/wedding-2.jpg" alt="" />
                    </div>

                    <div>
                        <h1 className='text-3xl md:text-4xl lg:text-4xl mt-2 md:mt-0 lg:mt-0 font-bold text-slate-800 mb-5'>Wedding Events</h1>
                        <h3 className='text-2xl italic font-semibold mb-2'>Features:</h3>
                        <div className='grid grid-cols-2'>
                            <p className='flex mb-2 items-center gap-3 text-[18px] font-semibold'>
                                <span>
                                    <FaArrowAltCircleRight className='text-yellow-500' />
                                </span>
                                <span className=''>
                                    Wedding Plan
                                </span>
                            </p>
                            <p className='flex mb-2 items-center gap-3 text-[18px] font-semibold'>
                                <span>
                                    <FaArrowAltCircleRight className='text-yellow-500' />
                                </span>
                                <span className=''>
                                    Decoration
                                </span>
                            </p>
                            <p className='flex mb-2 items-center gap-3 text-[18px] font-semibold'>
                                <span>
                                    <FaArrowAltCircleRight className='text-yellow-500' />
                                </span>
                                <span className=''>
                                    Card Design
                                </span>
                            </p>
                            <p className='flex mb-2 items-center gap-3 text-[18px] font-semibold'>
                                <span>
                                    <FaArrowAltCircleRight className='text-yellow-500' />
                                </span>
                                <span className=''>
                                    Arrangement
                                </span>
                            </p>
                            <p className='flex mb-2 items-center gap-3 text-[18px] font-semibold'>
                                <span>
                                    <FaArrowAltCircleRight className='text-yellow-500' />
                                </span>
                                <span className=''>
                                    Managment
                                </span>
                            </p>
                            <p className='flex mb-2 items-center gap-3 text-[18px] font-semibold'>
                                <span>
                                    <FaArrowAltCircleRight className='text-yellow-500' />
                                </span>
                                <span className=''>
                                    Final Work
                                </span>
                            </p>
                        </div>
                        <button className='btn bg-gradient-to-r from-red-500 to-orange-500 mt-3 text-white font-bold'>View More details</button>
                    </div>
                </div>
            </div>

            <div className='mt-20'>
                <div className='md:grid md:grid-cols-2 lg:gap-10 gap-10 items-center'>

                    <div>
                        <h1 className='text-3xl md:text-4xl lg:text-4xl mt-2 md:mt-0 lg:mt-0 font-bold text-slate-800 mb-5'>Birthday Events</h1>
                        <h3 className='text-2xl italic font-semibold mb-2'>Features:</h3>
                        <div className='grid grid-cols-2'>
                            <p className='flex mb-2 items-center gap-3 text-[18px] font-semibold'>
                                <span>
                                    <FaArrowAltCircleRight className='text-yellow-500' />
                                </span>
                                <span className=''>
                                    Birthday Plan
                                </span>
                            </p>
                            <p className='flex mb-2 items-center gap-3 text-[18px] font-semibold'>
                                <span>
                                    <FaArrowAltCircleRight className='text-yellow-500' />
                                </span>
                                <span className=''>
                                    Decoration
                                </span>
                            </p>
                            <p className='flex mb-2 items-center gap-3 text-[18px] font-semibold'>
                                <span>
                                    <FaArrowAltCircleRight className='text-yellow-500' />
                                </span>
                                <span className=''>
                                    Banner Design
                                </span>
                            </p>
                            <p className='flex mb-2 items-center gap-3 text-[18px] font-semibold'>
                                <span>
                                    <FaArrowAltCircleRight className='text-yellow-500' />
                                </span>
                                <span className=''>
                                    Arrangement
                                </span>
                            </p>
                            <p className='flex mb-2 items-center gap-3 text-[18px] font-semibold'>
                                <span>
                                    <FaArrowAltCircleRight className='text-yellow-500' />
                                </span>
                                <span className=''>
                                    Managment
                                </span>
                            </p>
                            <p className='flex mb-2 items-center gap-3 text-[18px] font-semibold'>
                                <span>
                                    <FaArrowAltCircleRight className='text-yellow-500' />
                                </span>
                                <span className=''>
                                    Final Work
                                </span>
                            </p>
                        </div>
                        <button className='btn bg-gradient-to-r from-red-500 to-orange-500 mt-3 text-white font-bold'>View More details</button>
                    </div>

                    <div>
                        <img className='rounded-md' src="https://i.postimg.cc/4yL44m3G/birthday.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className='mt-20'>
                <div className='md:grid md:grid-cols-2 lg:gap-10 gap-10 items-center'>
                    <div>
                        <img className='rounded-md' src="https://i.postimg.cc/76FBjy7N/aniversary.jpg" alt="" />
                    </div>

                    <div className=''>
                        <h1 className='text-3xl md:text-4xl lg:text-4xl mt-2 md:mt-0 lg:mt-0 font-bold text-slate-800 mb-5'>Anniversary Events</h1>
                        <h3 className='text-2xl italic font-semibold mb-2'>Features:</h3>
                        <div className='grid grid-cols-2'>
                            <p className='flex mb-2 items-center gap-3 text-[18px] font-semibold'>
                                <span>
                                    <FaArrowAltCircleRight className='text-yellow-500' />
                                </span>
                                <span className=''>
                                    Anniversary Plan
                                </span>
                            </p>
                            <p className='flex mb-2 items-center gap-3 text-[18px] font-semibold'>
                                <span>
                                    <FaArrowAltCircleRight className='text-yellow-500' />
                                </span>
                                <span className=''>
                                    Decoration
                                </span>
                            </p>
                            <p className='flex mb-2 items-center gap-3 text-[18px] font-semibold'>
                                <span>
                                    <FaArrowAltCircleRight className='text-yellow-500' />
                                </span>
                                <span className=''>
                                    Banner Design
                                </span>
                            </p>
                            <p className='flex mb-2 items-center gap-3 text-[18px] font-semibold'>
                                <span>
                                    <FaArrowAltCircleRight className='text-yellow-500' />
                                </span>
                                <span className=''>
                                    Arrangement
                                </span>
                            </p>
                            <p className='flex mb-2 items-center gap-3 text-[18px] font-semibold'>
                                <span>
                                    <FaArrowAltCircleRight className='text-yellow-500' />
                                </span>
                                <span className=''>
                                    Managment
                                </span>
                            </p>
                            <p className='flex mb-2 items-center gap-3 text-[18px] font-semibold'>
                                <span>
                                    <FaArrowAltCircleRight className='text-yellow-500' />
                                </span>
                                <span className=''>
                                    Final Work
                                </span>
                            </p>
                        </div>
                        <button className='btn bg-gradient-to-r from-red-500 to-orange-500 mt-3 text-white font-bold'>View More details</button>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <button className='btn bg-trasparent hover:bg-gradient-to-r from-red-500 to-orange-500 mt-10 font-bold hover:text-white border-gray-500'>View more events</button>
            </div>
        </div>
    );
};

export default Events;