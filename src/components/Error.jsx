import { useNavigate } from "react-router-dom";

const Error = () => {
    const  nav = useNavigate()
    return (

        <div className="h-lvh items-center text-center mt-8 ">
            <h1 className="text-7xl text-black">OOPS!!! Something Went Wrong</h1>
            <button onClick={()=>{nav(-1)}} className="px-4 py-3 rounded-lg bg-common mt-20 text-2xl text-white font-bold">Go Back</button>
        </div>
    );
};

export default Error;