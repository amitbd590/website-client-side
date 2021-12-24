import { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";
import fireBaseInitFun from "../../fireBase/fireBaseInit";

fireBaseInitFun();

const useFireBase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // Google SingIn

  const singInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
    // .then(result=>{
    //     console.log(result);
    // })
  };

  // User Profile



  const logOut = () => {
    signOut(auth).then(() => {});
    window.location.reload();
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return {
    user,
    singInGoogle,
    logOut,
  };
};

export default useFireBase;
