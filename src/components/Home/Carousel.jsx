import { useEffect, useState } from "react";
import { BsFillArrowLeftSquareFill,BsFillArrowRightSquareFill } from "react-icons/bs";

const Carousel = () => {


    const [carouseldata,setcardata] = useState([])
    useEffect(()=>{
        fetch('carousel-data.json')
        .then(res => res.json())
        .then(data =>setcardata(data))
    },[])

    

    return (
        <div className="relative">
            <div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={carouseldata[0]?.url} className="z-0 w-full md:h-[780px] rounded-lg  " />
    <div className="absolute w-full bg-black z-10 md:h-[780px] h-full rounded-lg opacity-40">

    </div>
    <div className="z-20 absolute flex space-x-2 md:space-x-4 justify-between transform right-2 bottom-4 md:right-12 md:bottom-12">
      <a href="#slide4" ><BsFillArrowLeftSquareFill className="md:w-10 md:h-10 text-white"/></a> 
      <a href="#slide2" ><BsFillArrowRightSquareFill className="md:w-10 md:h-10 text-white"/></a>
    </div>

  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className="absolute w-full bg-black z-10 md:h-[780px] h-full rounded-lg opacity-40">

</div>
    <img src={carouseldata[1]?.url}  className="z-0 w-full md:h-[780px] rounded-lg  " />
    <div className="z-20 absolute flex space-x-2 md:space-x-4 justify-between transform right-2 bottom-4 md:right-12 md:bottom-12">
      <a href="#slide1" ><BsFillArrowLeftSquareFill className="md:w-10 md:h-10 text-white"/></a> 
      <a href="#slide3" ><BsFillArrowRightSquareFill className="md:w-10 md:h-10 text-white"/></a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={carouseldata[2]?.url}  className="z-0 w-full md:h-[780px] rounded-lg  " />
    <div className="absolute w-full bg-black z-10 md:h-[780px] h-full rounded-lg opacity-40">

</div>
    <div className="z-20 absolute flex space-x-2 md:space-x-4 justify-between transform right-2 bottom-4 md:right-12 md:bottom-12">
      <a href="#slide2" ><BsFillArrowLeftSquareFill className="md:w-10 md:h-10 text-white"/></a> 
      <a href="#slide4" ><BsFillArrowRightSquareFill className="md:w-10 md:h-10 text-white"/></a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={carouseldata[3]?.url} className="z-0 w-full md:h-[780px] rounded-lg " />
    <div className="absolute w-full bg-black z-10 md:h-[780px] h-full rounded-lg opacity-40">

    </div>
    <div className="z-20 absolute flex space-x-2 md:space-x-4 justify-between transform right-2 bottom-4 md:right-12 md:bottom-12">
      <a href="#slide3" ><BsFillArrowLeftSquareFill className="md:w-10 md:h-10 text-white"/></a> 
      <a href="#slide1" ><BsFillArrowRightSquareFill className="md:w-10 md:h-10 text-white"/></a>
    </div>
  </div>

</div>
<div className="font-poppins absolute transform w-4/5 md:text-7xl leading-normal top-1/4 left-6 md:left-44   text-center font-bold text-white z-30">
  <h1 className=" drop-shadow-2xl shadow-black">Unite Visionaries through Meetups, Workshops, and Webinars</h1>
</div>


        </div>
    );
};

export default Carousel;