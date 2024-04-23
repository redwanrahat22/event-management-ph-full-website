import { useEffect, useState } from "react";

const AboutUs = () => {
    const [aboutdata,setabout] = useState([])

    useEffect(()=>{
       // fetch('../../../publica/aboutus.json')
       fetch('aboutus.json')
        .then(res => res.json())
        .then(data => setabout(data))

    },[])

    
    
    
    return (
        <div className="md:mt-32 mt-16 font-poppins w-10/12 m-auto">
            <h1 className="md:text-6xl text-3xl text-common font-bold text-center">WHO WE ARE</h1>
            
            <div className="">
            <p className="ml-2 md:ml-0 md:mt-20 mt-8 text-black text-[8px] md:text-lg  ">{aboutdata[0]?.aboutUs1}</p>
            <p className="ml-2 md:ml-0 md:mt-6 mt-4 text-black text-[8px] md:text-lg  ">{aboutdata[0]?.aboutUs2}</p>
            <p className="ml-2 md:ml-0 md:mt-6 mt-4 text-black text-[8px] md:text-lg ">{aboutdata[0]?.aboutUs3}</p>
            <p className="ml-2 md:ml-0 md:mt-6 mt-4 text-black text-[8px] md:text-lg ">{aboutdata[0]?.aboutUs4}</p>
            </div>
        </div>
    );
};

export default AboutUs;