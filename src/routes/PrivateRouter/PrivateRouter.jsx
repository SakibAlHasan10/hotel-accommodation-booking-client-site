import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/CustomApi/useAuth";
import { PropTypes } from "prop-types";
const PrivateRouter = ({children}) => {
    const {user, isLoading}= useAuth()
    if(isLoading){
        return <span>loading...</span>
    }
    if(user){
        return children
    }
    return <Navigate to={'/login'}/>
};
PrivateRouter.propTypes={
    children: PropTypes.node
}
export default PrivateRouter;