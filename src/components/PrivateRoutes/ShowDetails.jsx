import { useEffect, useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom";
import SaveLocal from "./LocalStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShowDetails = () => {
    const [dataload,setdataload] = useState([])
  
    const id = useParams()
 
    const loadedData = useLoaderData()
    
    console.log(dataload)
    

     

 const select =  loadedData.find(data => (data.id == id.id) )
   console.log(select)
   
   
  

    
    
    return (
     
            <div className="m-auto w-10/12 mt-12  font-poppins ">
                
                <img className="w-full m-auto rounded-tl-lg rounded-tr-lg" src={select?.image} alt="" />
                
                <div className="bg-common text-white pt-8 pb-16 rounded-bl-lg rounded-br-lg ">

                <div className="w-11/12 m-auto">
                    
                <div className="md:flex justify-between">

                <div className="flex  md:text-4xl font-bold ">
                    <h1>{select?.id}.</h1>
                    <h1 className="ml-1">{select?.title}</h1>
                </div>

                <button onClick={()=>{SaveLocal(select),toast('Successfully Added to Your Bookings')}} className="md:ml-96 ml-4 px-2 md:px-4 py-1 bg-white text-common text-[9px] md:text-lg rounded-md md:rounded-lg font-semibold">Book Now: ${select?.price}</button>
                <ToastContainer />
                </div>
                <p className="md:mt-4 text-[7px] md:text-sm textarea-md leading-relaxed"><span className="md:text-lg text-[9px] font-semibold">Service Description:</span> {select?.long_description}</p>
                </div>
                </div>
                
            </div>
       
    );
};

export default ShowDetails;