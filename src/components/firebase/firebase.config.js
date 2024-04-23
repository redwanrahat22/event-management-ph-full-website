
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY, 
  authDomain: import.meta.env.VITE_AUTHDOMAIN, 
  projectId: import.meta.env.VITE_PROJECTID, 
  storageBucket: import.meta.env.VITE_STORAGEBUCKET, 
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID, 
  appId: import.meta.env.VITE_APPID, 
};


const app = initializeApp(firebaseConfig);

export default app;


// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyDjhWQr5iCTjsKy1kagz9TwAzwJx5ALTjw",
//   authDomain: "project-management-b1ee4.firebaseapp.com",
//   projectId: "project-management-b1ee4",
//   storageBucket: "project-management-b1ee4.appspot.com",
//   messagingSenderId: "22025437078",
//   appId: "1:22025437078:web:6f016e4d7822720f5ea7b7"
// };


// const app = initializeApp(firebaseConfig);
// export default app