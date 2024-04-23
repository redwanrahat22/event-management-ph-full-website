import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
    const {user} = useContext(AuthContext)
    
    const userData = JSON.parse(localStorage.getItem('userinfo'))
      const DisplayName = userData?.displayName_val
      const photo = userData?.photoURL_val
      const email = userData.email_val
      const emailVerified = userData.emailVerified_val
      const phoneNumber = userData.phoneNumber_val
        

    return (
        <div className="font-poppins">
            <div className="bg-white md:mt-20 mt-16 md:w-2/4 w-4/5 m-auto rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg">
            <h1 className="text-center text-white bg-common md:py-4 py-2  md:text-4xl rounded-tl-lg rounded-tr-lg font-bold">My Profile</h1>
            
            <div className="w-32 md:mt-6 mt-4 m-auto  ">
                
                <h1 className="text-black  ">{photo ? <img className="rounded-full h-auto w-16 m-auto  md:w-32" src={photo}></img>: < CgProfile className="h-auto w-16 m-auto md:w-32" /> } </h1>
            </div>
            <div className="md:mt-8 mt-4 pb-6 ">

                <div className="md:flex mt-3 space-x-4 items-center text-sd md:text-sm justify-center md:w-4/5 m-auto">
                <h1 className="text-common font-semibold md:text-right  md:w-1/5 ml-4 md:ml-0">Username :</h1>
                <h2 className="border-2 w-3/5 overflow-hidden  text-black py-1 px-2 border-gray-400 rounded-md">{DisplayName ? `${DisplayName}`: 'User'}</h2>
                </div>
                <div className="md:flex mt-3 space-x-4 items-center text-sd md:text-sm justify-center md:w-4/5 m-auto">
                <h1 className="text-common font-semibold md:text-right  md:w-1/5 ml-4 md:ml-0">Email :</h1>
                <h2 className="border-2 w-3/5 overflow-hidden  text-black py-1 px-2 border-gray-400 rounded-md">{email}</h2>
                </div>
                <div className="md:flex mt-3 space-x-4 items-center text-sd md:text-sm justify-center md:w-4/5 m-auto">
                <h1 className="text-common font-semibold md:text-right  md:w-1/5 ml-4 md:ml-0">Email Verified :</h1>
                <h2 className="border-2 w-3/5 overflow-hidden  text-black py-1 px-2 border-gray-400 rounded-md">{emailVerified? 'Yes' : 'No'}</h2>
                </div>
                <div className="md:flex mt-3 space-x-4 items-center text-sd md:text-sm justify-center md:w-4/5 m-auto">
                <h1 className="text-common font-semibold md:text-right  md:w-1/5 ml-4 md:ml-0">Contact No :</h1>
                <h2 className="border-2 w-3/5 overflow-hidden  text-black py-1 px-2 border-gray-400 rounded-md">{phoneNumber ? {phoneNumber} : 'Not Available'}</h2>
                </div>
           
            </div>
            </div>
        </div>
    );
};

export default UserInfo;