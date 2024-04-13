import  { createContext } from 'react'
import PropTypes from "prop-types";
import useData from '../hooks/useData';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const FirebaseProvider = ({children}) => {

  const {data,dataLoading} = useData();


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };


    const authInfo = {
      data,
      dataLoading,
      createUser,
    };
  return (
    <AuthContext.Provider value={authInfo}>
      {
        children
      }
    </AuthContext.Provider>
  )
}

FirebaseProvider.propTypes = {
  children: PropTypes.node,
};

export default FirebaseProvider