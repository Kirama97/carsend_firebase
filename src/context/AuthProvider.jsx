import { onAuthStateChanged, updateCurrentUser } from 'firebase/auth';
import React, { createContext ,useContext , useEffect , useState} from 'react'
import { auth, db } from '../config/firebase-config';
import { doc, getDoc } from 'firebase/firestore';


const AuthContext = createContext();

const AuthProvider = ({children}) => {

  const [user , setUser] = useState()
  const [loading , setLoading] = useState()


  useEffect(() =>{

   
    const utlisateurConnecter = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        const userData = docSnap.exists() ? docSnap.data() : { role: "UTILISATEUR_STANDARD" };
        setUser({   
           uid: currentUser.uid,
           email: currentUser.email,
           role: userData.role
           });
      } else {
        setUser(null);
      }
      setLoading(false);
    })

    return () => utlisateurConnecter();


  },[]);



  return (
    <AuthContext.Provider value={{user , loading}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider
 