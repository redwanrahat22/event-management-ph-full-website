import { useEffect, useState } from "react";
import ShowServices from "../Home/ShowServices";



const Events = () => {
        const [service,setservice] = useState([])

        useEffect(()=>{
            fetch('services.json')
            .then(res =>res.json())
            .then(data => setservice(data))

        },[])

    
    return (
        <div className="">
            <div className="w-4/5 mt-16 md:mt-20 text-center m-auto ">
                <h1 className=" drop-shadow-lg shadow-lg font-poppins leading-normal text-2xl md:text-8xl text-black font-bold ">All Available Services</h1>
            </div>
            <div className="md:mt-32 mt-8 md:grid grid-cols-4 gap-8 space-y-5 md:space-y-0 ">
            {
                  service &&  service.map(showcard => <ShowServices key={showcard.id} showcard = {showcard}></ShowServices>)
                }
            </div>
        </div>
    );
};

export default Events;