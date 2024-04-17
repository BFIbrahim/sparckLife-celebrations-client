import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Navigation from "../shared/Navigation/Navigation";

const Main = () => {
    return (
        <>
           <Navigation></Navigation> 
           <Outlet></Outlet>

        </>
    );
};

export default Main;