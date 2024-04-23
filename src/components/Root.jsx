import { Outlet } from "react-router-dom";
import Navbar from "./Nav/Navbar";
import Footer from "./Footer/Footer";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
const Root = () => {
    
    useEffect(() => {
        AOS.init({
          offset: 100, 
          duration:500, 
          easing: 'ease', 
          once: false
        });
      }, []);
    return (
        <div className="bg-gray-200">
            <div className=" bg-common m-auto">
            <Navbar></Navbar>
            </div>
            <div className="w-10/12  m-auto ">
            <Outlet ></Outlet>
           
            </div>
            <div className="">
            <Footer></Footer>
            </div>
          
           
        </div>
    );
};

export default Root;