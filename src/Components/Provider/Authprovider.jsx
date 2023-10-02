import { createContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase.config";

export const Authcontext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const Authprovider = ({ children }) => {
  // ggogle login

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // sign up

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  
//  sign in
const signin = (email,password) =>{
   return signInWithEmailAndPassword(auth,email,password)

}

  const authentication = {
    googleLogin,
    createUser,
    signin,
  };

  return (
    <Authcontext.Provider value={authentication}>
      {children}
    </Authcontext.Provider>
  );
};

export default Authprovider;
