import { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useState } from "react";
import { FaEyeSlash , FaEye } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [errmsg , seterrmsg] = useState(null)
  const[showpass,setshowpass] =useState(false)
  const {handleLogin,handleGSignUp,handleResetPass} = useContext(AuthContext)
  const [mail,setmail] = useState()
  const nav = useNavigate()

  const takeEmail = (e) =>{
      setmail(e.target.value)
      
  }


  const showtoast = () =>{
    return toast('Log in successful')
  }
  const showtoast1 =()=>{
    return toast('Reset Mail Sent')
  }
  const handleInput = (e) =>{

    seterrmsg('')
    e.preventDefault()
    const email = e.target.email.value
    const pass = e.target.password.value

   handleLogin(email,pass)
   
   .then(result =>{
   

    const displayName = result.user.displayName
    const email = result.user.email
    const emailVerified = result.user.emailVerified
    const phoneNumber = result.user.phoneNumber
    const photoURL = result.user.photoURL
    const userData = {
          displayName_val : displayName,
          email_val : email,
          emailVerified_val : emailVerified,
          phoneNumber_val : phoneNumber,
          photoURL_val : photoURL,
    }
  

   localStorage.setItem('userinfo',JSON.stringify(userData))
    showtoast()
    setInterval(() => {
      nav('/')
    }, 2000);
    
})


.catch(error => {
 
  if  (error.code == 'auth/invalid-credential')
  {
    seterrmsg("user credential doesn't match")
  }
  else{
    seterrmsg('unknown error occured')
  }
})
  }

  const handleForgotPass = () =>{
      

      if(mail){
        handleResetPass(mail)
        .then(result => {
         showtoast1() 
         
        })
 
        .catch(error=> '')

      }

      else toast('Enter your email')
      
  }

  const handleGoogleSignUp =(e) =>{
    e.preventDefault()
    const provider = new GoogleAuthProvider();

    handleGSignUp(provider)
    .then(result => {
      const displayName = result.user.displayName
      const email = result.user.email
      const emailVerified = result.user.emailVerified
      const phoneNumber = result.user.phoneNumber
      const photoURL = result.user.photoURL
      const userData = {
            displayName_val : displayName,
            email_val : email,
            emailVerified_val : emailVerified,
            phoneNumber_val : phoneNumber,
            photoURL_val : photoURL,
      }
     
      localStorage.setItem('userinfo',JSON.stringify(userData))
      showtoast()

     
      setTimeout(() => {
        nav('/')
      }, 2000);
    }
     )

    .catch(error => '')


}

  const handleShowpass = (e) =>{
    e.preventDefault()
    
    setshowpass(!showpass)
  }


  
    return (
      <div>
      
<div className="flex-col lg:flex-row-reverse md:mt-32 mt-16 text-black font-poppins">

<div className=" md:w-1/5 w-4/5 m-auto   shadow-2xl bg-white rounded-lg">
<div className="bg-common md:py-4 py-2 rounded-tl-lg rounded-tr-lg">
        <h1 className="md:text-5xl text-2xl text-center font-semibold">Login</h1>
 </div>
<form onSubmit={handleInput}  className="card-body -my-5 md:my-0">

  <div className="form-control">
    <label className="label ">
      <span className="label-text text-[10px] md:text-sm text-black ">Email</span>
    </label>
    <input onChange={takeEmail} required type="email" name="email" placeholder="email" className="input text-[10px] h-6 md:h-10 md:text-sm bg-white rounded-sm md:rounded-lg input-bordered" required />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text text-[10px] md:text-sm text-black">Password</span>
    </label>
      <div className="relative">
    <input required  type={showpass? 'text' : 'password'} name="password" placeholder="password" className="input w-full text-[10px] h-6 md:h-10 md:text-sm bg-white rounded-sm md:rounded-lg input-bordered " required />
   <button className="absolute md:right-3 right-1 md:bottom-4 bottom-2 opacity-60"  onClick={handleShowpass}>{
    !showpass ? <FaEyeSlash className="md:h-full h-2"></FaEyeSlash>: <FaEye className="md:h-full h-2" />
}</button>
</div>
   <h1 className="md:text-[13px] text-[9px] font-sans md:ml-2 text-red-500">{errmsg}</h1>
    <div className="md:mt-4  mt-1">
      <a onClick={handleForgotPass} className="hover:underline hover:cursor-pointer md:text-[12px] text-sd block">forgot password?</a>
      <h1 className="md:text-[12px]  text-[9px] md:inline">already have an account? </h1><NavLink to='/register'><button className="underline text-[9px] md:text-sm">Register</button></NavLink> 
      </div>
  </div>
  <div className="form-control md:mt-6">

    <button className="md:py-1 py-[2px] rounded-sm md:rounded-md text-white hover:bg-green-500 hover:text-black text-[10px] md:text-lg bg-common w-1/4">Login</button>
    <ToastContainer />
  </div>
</form>

<div className="">
  <div className="flex text-sd -mt-4 md:mt-0 md:text-sm space-x-2 w-3/4 m-auto justify-center">
  <h2>-------</h2>
        <h1>Or</h1>
        <h2>-------</h2>
  </div>

  <div className="md:w-full w-4/5 m-auto text-center md:mr-4   md:pb-12 pb-8 md:my-4 mt-2 "> 
    <button onClick={handleGoogleSignUp} className=" md:text-sm   hover:bg-common hover:text-white border md:px-12 px-4 md:py-2 py-1 rounded-md border-gray-400">
      <div className="flex items-center space-x-2 md:space-x-4">
      <FaGoogle  className="md:text-xl"/>
<h1 className="md:text-sm text-sd">Sign In With google</h1>
        
      </div>
    </button>
  </div>
        
</div>

</div>



</div>

  </div>
    );
};

export default Login;