import React, { createContext, useContext, useState, useEffect } from "react";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase-config";

const CarContext = createContext();

const CarProvider = ({ children }) => {
  const [annonces, setAnnonces] = useState([]);
  const [loading, setLoading] = useState(true);

  const annonceCollection = collection(db, "annonce");

  useEffect(() => {
    const fetchAnnonce = async () => {
      try {
        const snapshot = await getDocs(annonceCollection);

        const annoncesAvecProprietaire = await Promise.all(
          snapshot.docs.map(async (annonceDoc) => {
            const annonceData = annonceDoc.data();

            let proprietaire = null;

            if (annonceData.proprietaireId) {
              const userSnap = await getDoc(
                doc(db, "publicUsers", annonceData.proprietaireId)
              );

              if (userSnap.exists()) {
                proprietaire = userSnap.data();
              }
            }

            return {
              id: annonceDoc.id,
              ...annonceData,
              proprietaire,
            };
          })
        );

        setAnnonces(annoncesAvecProprietaire);
      } catch (error) {
        console.error("Erreur chargement annonces :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnonce();
  }, []);

  console.log("ANNONCES :", annonces);

  // utils dates
  const toDate = (date) => new Date(date);

  const daysBetween = (debut, fin) => {
    const diff = toDate(fin) - toDate(debut);
    return diff > 0 ? diff / (1000 * 60 * 60 * 24) + 1 : 0;
  };

  return (
    <CarContext.Provider value={{ annonces, loading, daysBetween }}>
      {children}
    </CarContext.Provider>
  );
};

export const useCarContext = () => useContext(CarContext);
export default CarProvider;
