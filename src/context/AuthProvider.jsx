import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged , signOut } from "firebase/auth";
import { auth, db } from "../config/firebase-config";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext(null);

const ROLES = ["UTILISATEUR_STANDARD", "ADMIN", "SUPERADMIN"];

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = async () => {
      await signOut(auth)
      setUser(null)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      try {
        if (!currentUser) {
          setUser(null);
          setLoading(false);
          return;
        }

        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        let role = "UTILISATEUR_STANDARD";

        if (docSnap.exists()) {
          const data = docSnap.data();
          if (ROLES.includes(data.role)) {
            role = data.role;
          }
        }

        setUser({
          uid: currentUser.uid,
          email: currentUser.email,
          role,
        });

        console.log(user)
      } catch (error) {
        console.error("Erreur AuthContext :", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);



  return (
    <AuthContext.Provider value={{ user, loading , logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth doit être utilisé dans AuthProvider");
  }
  return context;
};

export default AuthProvider;
