import  { createContext } from 'react'
import PropTypes from "prop-types";
import useData from '../hooks/useData';


export const AuthContext = createContext(null)

const FirebaseProvider = ({children}) => {

  const {data,dataLoading} = useData();

    const authInfo = {
      data,
      dataLoading,
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