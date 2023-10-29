import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
  const Logout = ()=>{
    setloadinh(true)
    return signOut(auth);

  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setuser(currentUser);
        console.log('current user', currentUser);
        setloadinh(false);
    });
    return () => {
        return unsubscribe();
    }
}, [])

  const authinfo = {user,loading,createUser,signin,Logout};

  return (
    <Authcontext.Provider value={authinfo}>
        {children}</Authcontext.Provider>
  );
};

export default Authprovider;
