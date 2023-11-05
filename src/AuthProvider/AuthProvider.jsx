import { createContext, useState } from "react";
import PropTypes from "prop-types"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../configs/firebase/firebase.config";
export const AuthContext= createContext()
const AuthProvider = ({children}) => {
    const [theme, setTheme]= useState(true)
    const [isLoading, setIsLoading]=useState(true)
    const [user, setUser]= useState(null)
    
// sign in with google
const googleProvider = new GoogleAuthProvider()
const signInWithGoogle =()=>{
    setIsLoading(true)
    return signInWithPopup(auth, googleProvider)
}







    const authInfo={
        theme,
        isLoading,
        user,
        setTheme,
        signInWithGoogle,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthContext.propTypes={
    children:PropTypes.node
}
export default AuthProvider;