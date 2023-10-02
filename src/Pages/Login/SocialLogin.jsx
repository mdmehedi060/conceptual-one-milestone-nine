import { useContext } from "react";
import { Authcontext } from "../../Components/Provider/Authprovider";

const SocialLogin = () => {
const {user,googleLogin}= useContext(Authcontext)

const handleSocialLogin=(media)=>{
    media()
    .then(res=>console.log(res))
    .catch(error=>console.log(error))
}

    return (
        <>
            <div className="divider">continue with</div>
            <div className="">
                <button
                onClick={()=>handleSocialLogin(googleLogin)}
                className="btn btn-neutral btn-sm">Google</button>
            </div>
        </>
    );
};

export default SocialLogin;