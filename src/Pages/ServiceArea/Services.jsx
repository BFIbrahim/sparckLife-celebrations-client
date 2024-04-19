import { FaBoxes, FaHandshake, FaPhoneVolume, FaClock } from "react-icons/fa";
import { GiDamagedHouse, GiWoodFrame } from "react-icons/gi";
import { RiLightbulbFlashFill } from "react-icons/ri";



const Services = () => {
    return (
        <>

            <div className="mt-24 mb-10 text-center">
                <h1 className="text-3xl font-bold uppercase text-yellow-500 italic">Our Features</h1>
                <p>Enjoy best features with sparkLife Celebrations</p>
            </div>
            <div className="mb-24 pb-5 md:grid md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto">
                <div className="bg-white  border-[1px] border-slate-300  cursor-pointer hover:bg-gradient-to-r from-red-500 to-orange-500 p-10 hover:text-white">
                    <div className="text-center">
                        <RiLightbulbFlashFill className=" text-5xl mx-auto font-bold text-yellow-500" />
                        <h2 className="text-2xl font-semibold uppercase mt-2">Briliant Idea</h2>
                    </div>
                </div>
                <div className="bg-white  border-[1px] border-slate-300 cursor-pointer hover:bg-gradient-to-r from-red-500 to-orange-500 p-10 hover:text-white">
                    <div className="text-center">
                        <FaHandshake className=" text-5xl mx-auto font-bold text-yellow-500" />
                        <h2 className="text-2xl font-semibold uppercase mt-2">Smart and friendly team</h2>
                    </div>
                </div>
                <div className="bg-white  border-[1px] border-slate-300 cursor-pointer hover:bg-gradient-to-r from-red-500 to-orange-500 p-10 hover:text-white">
                    <div className="text-center">
                        <FaPhoneVolume className=" text-5xl mx-auto font-bold text-yellow-500" />
                        <h2 className="text-2xl font-semibold uppercase mt-2">08:00AM - 10:00PM </h2>
                    </div>
                </div>
                <div className="bg-white  border-[1px] border-slate-300 cursor-pointer hover:bg-gradient-to-r from-red-500 to-orange-500 p-10 hover:text-white">
                    <div className="text-center">
                        <FaClock className=" text-5xl mx-auto font-bold text-yellow-500" />
                        <h2 className="text-2xl font-semibold uppercase mt-2">Unforgettable time</h2>
                    </div>
                </div>
                <div className="bg-white  border-[1px] border-slate-300 cursor-pointer hover:bg-gradient-to-r from-red-500 to-orange-500 p-10 hover:text-white">
                    <div className="text-center">
                        <GiDamagedHouse className=" text-5xl mx-auto font-bold text-yellow-500" />
                        <h2 className="text-2xl font-semibold uppercase mt-2">Unique Decoration</h2>
                    </div>
                </div>
                <div className="bg-white  border-[1px] border-slate-300 cursor-pointer hover:bg-gradient-to-r from-red-500 to-orange-500 p-10 hover:text-white">
                    <div className="text-center">
                        <GiWoodFrame className=" text-5xl mx-auto font-bold text-yellow-500" />
                        <h2 className="text-2xl font-semibold uppercase mt-2">unique Scenario</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;