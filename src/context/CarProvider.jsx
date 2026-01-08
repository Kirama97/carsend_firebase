import React, { createContext, useContext , useState , useEffect } from 'react'
import { collection , addDoc , getDocs , getDoc , doc , updateDoc , deleteDoc} from 'firebase/firestore'
import {db } from  "../config/firebase-config"

const CarContext = createContext()

const CarProvider = ({ children }) => {

  const [annonces , setAnnonces] = useState([])
  // const [proprietaire , setProprietaire] = useState("")
  const [loading, setLoading] = useState(true)


  const annonceCollection = collection(db, "annonce")



  useEffect(() => {
   
         const fetchAnnonce = async () => {

           try {
              
               const snapshot = await getDocs(annonceCollection);
                
               const annonceAvecProprietaire = await Promise.all(

                    snapshot.docs.map(async (annonceDoc) => {
                       const annonceData = annonceDoc.data()

                       let proprietaire = null 
                        if(annonceData.proprietaireId){
                           const userSnap = await getDoc(
                            doc(db, 'users',annonceData.proprietaireId)
                           )
                          proprietaire = userSnap.exists() ? userSnap.data() : null
                        }
                      return {
                        id:annonceDoc.id,
                        ...annonceData,
                        proprietaire
                      }

                    })
               )
            
                setAnnonces(annonceAvecProprietaire)
           } catch (error) {
              console.error("erreur chargement annonces :" , error)
           }finally {
             setLoading(false)
           }
           
         }
          

       fetchAnnonce()

  }, []);

  const reservationsExistantes = [
  { debut: "2026-01-10", fin: "2026-01-12" },
  { debut: "2026-01-18", fin: "2026-01-20" },
]

console.log(annonces)

  //  calcule date de reservaton et tarif 

  //  convertire les date text en vrais date
  const toDate = (date) => new Date(date)

  const isDateReserved = (date) => {
     return reservationsExistantes.some(r => {
       return (
         toDate(date) >= toDate(r.debut) && 
         toDate(date) <= toDate(r.fin)
       )
     })
  }

  // la nombre de jour en ces deux date

  const daysBetween = (debut , fin ) => {
     const diff = toDate(fin) - toDate(debut)
     return diff > 0 ? diff / (1000 * 60 * 60 * 24) + 1 : 0
    //  1 jour = 1000 ms × 60 s × 60 min × 24 h

  }

  
  return (
    <CarContext.Provider value={{ annonces  , isDateReserved , daysBetween }}>
      {children}
    </CarContext.Provider>
  )
}

export const useCarContext = () => useContext(CarContext)

export default CarProvider
