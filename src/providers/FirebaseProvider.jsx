import  { createContext } from 'react'


export const AuthContext = createContext(null)

const FirebaseProvider = () => {
    const authInfo = {
        name:"surnaly akter"
    }
  return (
    <AuthContext.Provider value={authInfo}>FirebaseProvider</AuthContext.Provider>
  )
}

FirebaseProvider.propTypes = {}

export default FirebaseProvider