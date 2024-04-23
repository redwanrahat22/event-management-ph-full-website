import { NavLink } from "react-router-dom";

const ShowServices = ({showcard}) => {

    const {id,image,title,price,short_description} = showcard

    return (
        <div className="font-poppins" data-aos = 'fade-up'>
            <div className=" md:h-full m-auto bg-common p-4 w-56 md:w-full rounded-lg ">
              <div>
              <figure><img className="rounded-lg md:w-full w-48  md:h-auto m-auto" src={image} alt="Shoes" /></figure>
              </div>
  
  <div className="text-white ml-4">
    <div className="flex -ml-3 md:mt-8 mt-3 font-bold text-sm md:text-2xl ">
    <h1>{id}.</h1>
    <h2 className="ml-1 "> {title}</h2>
    </div>
      
    <p className="mt-4 text-[9px] md:text-[12px]">{short_description}</p>
    <h3 className="mt-2 text-[12px] md:text-lg">Price: {price}$</h3>

   <NavLink to={`/details/${id}`}><button className="md:my-4 my-1 px-4 py-2 text-[10px] md:text-lg font-semibold bg-white text-common rounded-lg">Show Details</button></NavLink>
  </div>
</div>
        </div>
    );
};

export default ShowServices;