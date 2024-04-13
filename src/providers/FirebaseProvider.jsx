import  { createContext, useEffect, useState } from 'react'
import PropTypes from "prop-types";
import useData from '../hooks/useData';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged,  signInWithEmailAndPassword,  signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';

//social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null)

const FirebaseProvider = ({children}) => {
  const [user,setUser] = useState(null)

  const {data,dataLoading} = useData();

//create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth,email,password )

  };

  //sign in user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logout
  const logout = () =>{
   return signOut(auth);
  }


  // google sign in
  const googleLogin = () =>{
    return signInWithPopup(auth,googleProvider)
  }

  //github sing in
const githubLogin = () =>{
  return signInWithPopup(auth,githubProvider)
}


  //observer
  useEffect(()=>{
 const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });

    return () => unSubscribe();

  },[])


    const authInfo = {
      data,
      dataLoading,
      user,
      createUser,
      logout,
      signInUser,
      googleLogin,
      githubLogin,

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