import { BsGoogle } from "react-icons/bs";
import useAuth from "../../hooks/CustomApi/useAuth";
import toast from "react-hot-toast";
const SocialLogin = () => {
    const {signInWithGoogle}=useAuth()
    const handleGoogle=()=>{
        signInWithGoogle()
        .then(res=>{
            if (res.user) {
                toast.success("create account successful", )
              }
        }).catch(error=>{
            console.log(error)
        })
    }
  return (
    <div>
      <div className="flex gap-1 items-center justify-center">
        <span className="border-b-2 w-full"></span>
        or
        <span className="border-b w-full"></span>
      </div>
      
      <button onClick={handleGoogle} className="flex w-full py-2 my-4 hover:shadow-xl shadow-primaryColor border rounded-3xl items-center justify-center gap-3">
        <BsGoogle className="text-orange-500 text-3xl bg-white" />
        <span>Continue with google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
