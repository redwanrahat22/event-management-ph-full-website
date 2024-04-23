import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) =>

{
        
        const [user,setuser] = useState(null)
        const [loading,setloading] = useState(true)
        

        const auth = getAuth(app)

        const handleRegister = (email,password) =>{
         setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
            
        }

        const handleGSignUp = (provider) => {
            return signInWithPopup(auth,provider)
        }

       const handleLogin = (email,password)=>{
        setloading(true)
        
        return signInWithEmailAndPassword(auth,email,password)
         
       }

       const handleSignOut = () =>{
            
         setloading(true)

                signOut(auth)

                .then(()=>{console.log('signed out successfully' ,
               
                )})
                .catch(error => console.log(error))
       }
       
    const   handleResetPass = (email) =>{
        return sendPasswordResetEmail(auth,email)
       }

   

       
        useEffect(()=>{
            const unscubsribe = onAuthStateChanged(auth,currentUser =>{
                
                setuser(currentUser)
                setloading(false)
            })

            return ()=> unscubsribe()

        },[])
        
    const userInfo = {user,loading,handleRegister,handleGSignUp,handleLogin,handleSignOut,handleResetPass}
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
        {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;