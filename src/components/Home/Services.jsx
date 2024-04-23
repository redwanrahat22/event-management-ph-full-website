import { useEffect, useState } from "react";
import ShowServices from "./ShowServices";


const Services = () => {
        const [service,setservice] = useState([])

        useEffect(()=>{
            fetch('services.json')
            .then(res =>res.json())
            .then(data => setservice(data))

        },[])

    
    return (
        <div className="">
            <div className="w-4/5  text-center m-auto ">
                <h1 className="drop-shadow-lg shadow-lg font-poppins leading-normal md:text-8xl text-2xl text-black font-bold underline underline-offset-8">Our Services</h1>
            </div>
            <div className="md:mt-32 mt-12 md:grid grid-cols-3 md:gap-8 space-y-4 md:space-y-0 ">
                {
                  service &&  service.map(showcard => <ShowServices showcard = {showcard}></ShowServices>)
                }
            </div>
        </div>
    );
};

export default Services;