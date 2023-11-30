import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import auth from '../../firebase.config';
import useAxiosPublic from '../hooks/useAxiosPablic';
import useWishlist from '../hooks/useWishlist';

const MyContext = createContext();
export const useAuth = ()=> {
  return useContext(MyContext);
}
function AuthProvider({children}) {
const googleAuth = new GoogleAuthProvider();
const githubAuth = new GithubAuthProvider();
const [user, serUser] = useState(null)
const [loading, setLoading] = useState(false);
const [role, setRole] = useState({});
const [wishlist, setWishlist] = useState(useWishlist() || []);
    console.log(wishlist)
const [modalVideoLink, setModalVideoLink] = useState("");
const axiosPublic = useAxiosPublic();


  const createUser = (email, password)=> {
    return createUserWithEmailAndPassword(auth, email, password);
  }


  const signInUser = (email, password)=> {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signInWithGoogle = ()=> {
    return signInWithPopup(auth, googleAuth)
  }
  const signInWithGithub = ()=> {
    return signInWithPopup(auth, githubAuth)
  }

  const logout = ()=> {
    return signOut(auth)
  }

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
      console.log(currentUser)
      
      serUser(currentUser);
      if(currentUser){
        axiosPublic.post("/jwt", {email: currentUser.email}).then(res => localStorage.setItem("accessToken", res.data)).catch(err => console.log(err));
        
        setLoading(false)
        axiosPublic.get(`/users/admin?email=${currentUser.email}`).then(res => {
          setRole(res.data.userRole)
          console.log(res.data.userRole)
          console.log(res.data)
        }).catch(err => console.log(err))
      }else{
        localStorage.removeItem("accessToken")
      }
    })

    return unsubscribe

  },[axiosPublic])
  const authValue = {
    signInWithGoogle,
    signInWithGithub,
    user,
    logout,
    createUser,
    signInUser,
    loading,
    setLoading,
    modalVideoLink,
    setModalVideoLink,
    wishlist,
    setWishlist,
    role,
    setRole
  }
  return (
    <MyContext.Provider value={authValue}>
      {children}
    </MyContext.Provider>
  )
}

export default AuthProvider