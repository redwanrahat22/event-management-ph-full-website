import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading) return  <div className="mt-32 text-center"> <span className="loading loading-bars w-48 bg-common"></span></div>

    if(user)
    return children

    else return <Navigate state={location.pathname} to='/login'></Navigate>
  
};

export default PrivateRoute;