import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../configs/firebase/firebase.config";
import axios from "axios";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  // sign in with google
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // sign up with email
  const signUpWithEmail = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email
  const signInWIthEmail = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
      if(currentUser){
        const loggedUser = {email: currentUser.email}
        axios.post("http://localhost:5000/jwt", loggedUser, {withCredentials:true} )
        .then(res=>{
          console.log(res.data)
        })
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // logout
  const logout = () => {
    signOut(auth).then(() => {
      alert("sign out successfully");
    });
  };

  const authInfo = {
    theme,
    isLoading,
    user,
    setTheme,
    signInWithGoogle,
    signUpWithEmail,
    signInWIthEmail,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
