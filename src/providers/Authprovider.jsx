import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const Authcontext = createContext();
const auth = getAuth(app);

const Authprovider = ({children}) => {
  const [user, setuser] = useState(null);
  const [loading, setloadinh] = useState(true);

  const createUser =(email,password)=>{
    setloadinh(true)
    return createUserWithEmailAndPassword(auth,email,password);
  }
  const signin =(email,password)=>{
    setloadinh(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  useEffect(()=>{
   const unsubcribe= onAuthStateChanged(auth,currentUser=>{
        setuser("current user ",currentUser);
        setloadinh(false);
    });
    return unsubcribe();
  },[])

  const authinfo = {user,loading,createUser,signin};

  return (
    <Authcontext.Provider value={authinfo}>
        {children}</Authcontext.Provider>
  );
};

export default Authprovider;
