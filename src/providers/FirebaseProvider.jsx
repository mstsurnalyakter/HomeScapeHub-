import  { createContext, useEffect, useState } from 'react'
import PropTypes from "prop-types";
import useData from '../hooks/useData';
import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged,  signInWithEmailAndPassword,  signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';

//social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export const AuthContext = createContext(null)

const FirebaseProvider = ({children}) => {
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true)


  const {data,dataLoading} = useData();

//create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password )

  };

  //update user profile
  const updateUserProfile = (fullName, email, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: fullName,
      email: email,
      photoURL: photoURL,
    });
  };

  //sign in user
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logout
  const logout = () =>{
    setUser(null)
   return signOut(auth);
  }


  // google sign in
  const googleLogin = () =>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
  }

  //github sign in
 const githubLogin = () =>{
  setLoading(true);
  return signInWithPopup(auth,githubProvider)
 }

 //twitter sign in
 const twitterLogin = () =>{
  setLoading(true);
  return signInWithPopup(auth,twitterProvider)
 }



  //observer
  useEffect(()=>{
 const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      }
    });

    return () => unSubscribe();

  },[])


    const authInfo = {
      data,
      dataLoading,
      user,
      loading,
      createUser,
      logout,
      signInUser,
      googleLogin,
      githubLogin,
      twitterLogin,
      updateUserProfile,
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