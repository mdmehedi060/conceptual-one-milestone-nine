
import { useContext } from 'react';
import { Authcontext } from '../Components/Provider/Authprovider';

const useAuth = () => {

    const all = useContext(Authcontext)
    return all;
};

export default useAuth;