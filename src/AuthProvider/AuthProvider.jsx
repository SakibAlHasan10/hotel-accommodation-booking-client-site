import { createContext, useState } from "react";
import PropTypes from "prop-types"
export const AuthContext= createContext()
const AuthProvider = ({children}) => {
    const [theme, setTheme]= useState(true)
    const [isLoading, setIsLoading]=useState(true)
    const [user, setUser]= useState(null)









    const authInfo={
        theme,
        isLoading,
        user,
        setTheme,
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