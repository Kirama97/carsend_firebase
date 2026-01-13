import React, { use, useState , useEffect } from 'react'
import Button from '../../Button'
import { motion } from "framer-motion"
import { auth } from '../../../config/firebase-config'
import { useAuth } from '../../../context/AuthProvider'




const ReservationForm = ({show , annonce}) => {
    const {user} = useAuth()
    const [dateDebut , setDateDebut] = useState('')
    const [nombreJour , setNombreJour] = useState(0)
    const [montantTotal , setMontantTotal] = useState(0)
    const [dateFin , setDateFin] = useState('')
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState('')

    console.log("user annonce :", user.uid);

    
     useEffect(() => {

       if(annonce && annonce?.tarif) {
         setMontantTotal(nombreJour * annonce.tarif);
       }

     }, [nombreJour, annonce?.tarif]);  

   
   useEffect(() => {
      if (!dateDebut) return;

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const selectedDate = new Date(dateDebut);

      if (selectedDate <= today) {
        setError("La date doit être supérieure à la date actuelle");
        setDateDebut('');
        return;
      }else {
        setError('');
      }

      if (nombreJour > 0) {
        const fin = new Date(selectedDate);
        fin.setDate(fin.getDate() + Number(nombreJour));
        setDateFin(fin.toISOString().split("T")[0]);
      }
    }, [dateDebut, nombreJour]);

        
  

    const handleSubmit = (e) => {

      e.preventDefault();
      setLoading(true);

      const reservationData = {
        annonceId: annonce.id,
        debut : dateDebut,
        fin :  dateFin,
        jour: nombreJour,
        montant :montantTotal,
        status : 'en attente',
        userId: user.uid ,
        proprietaireId : annonce.proprietaireId
      };

      // console.log("Données de réservation :", reservationData);
  
    
      setLoading(false);
      show(false);
      taost.success("Réservation soumise avec succès !");

      };


      
  return (
   <div className="fixed inset-0 z-50 bg-neutral-900/40 backdrop-blur-sm flex items-center justify-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}

           className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 relative">

            {/*  Close */}
            <button
              onClick={() => show(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-red-600"
            >
              ✕
            </button>

            {/*  Header */}
            <h2 className="text-xl font-bold text-neutral-800 mb-1">
              Réserver la voiture
            </h2>
            <p className="text-sm text-neutral-500 mb-6">
              Choisissez vos dates de réservation
            </p>
      
            {/*  Form */}
            <form className="space-y-5" onSubmit={handleSubmit}> 

              {/* Date début */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-neutral-700">
                  Date de réservation
                </label>
                <input
                  type="date"
                  value={dateDebut}
                  onChange={(e) => setDateDebut(e.target.value)}
                  className={`border rounded-lg px-4 py-2 outline-none
                      focus:ring-2
                      ${error 
                        ? "border-red-500 focus:ring-red-500" 
                        : "border-neutral-300 focus:ring-primary"}
                    `}
                />
                {error && <span className='text-red-600 text-sm bg-red-100 p-2 rounded-md mt-2'>{error}</span>}
              </div>

              {/* Date fin */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-neutral-700">
                  Nombre de Jour (limite 5)
                </label>
                <input

                  min={1}
                  max={5}
                  value={nombreJour}
                  onChange={(e) => setNombreJour(Number(e.target.value))}
                  type="number"
                  placeholder='Nombre de jour Max 5'
                  className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              {/*  Résumé */}
              <div className="bg-neutral-100 rounded-lg p-4 text-sm text-neutral-700">
                <div className="flex justify-between">
                  <span>Durée</span>
                  <span className="font-semibold">{nombreJour} jours</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Prix / jour</span>
                  <span className="font-semibold">{annonce.tarif} FCFA</span>
                </div>
                  {
                  dateFin && (
                    <div className="mt-2 text-sm flex flex-col  gap-3  bg-green-100 p-3 rounded-lg  text-sm text-neutral-700">
                      <span>Debut de la réservation le : <span className='text-green-600 text-md font-bold'>{dateDebut}</span></span>
                      <span>Fin de la réservation le : <span className='text-red-600 text-md font-bold'>{dateFin}</span></span>
                    </div>
                  )
                }
                <div className="flex justify-between border-t pt-2 mt-2 font-bold">
                  <span>Total</span>
                  <span className="text-primary">{montantTotal} FCFA</span>
                </div>
              

              </div>

              {/*  Actions */}
              <div className="flex gap-4 pt-2">
             <Button
                  disabled={loading || nombreJour <= 0 || !dateDebut}
                  type="submit"
                  className="w-full"
                >
                  {loading ? "Chargement..." : "Confirmer la réservation"}
                </Button>
                <Button
                  type="button"
                  className="w-full bg-red-600 hover:bg-red-700"
                  onClick={() => show(false)}
                >
                   Annuler
                </Button>
              </div>

            </form>
          </motion.div> 

                
          
        </div>
       
          
        
  )

 } 


export default ReservationForm
