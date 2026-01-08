import React, { useState } from 'react'
import Button from '../../Button'
import { motion } from "framer-motion"



const ReservationForm = ({show}) => {
 
    const [dateDebut , setDateDebut] = useState('')
    const [nombreJour , setNombreJour] = useState('')

    
    
     
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
            <form className="space-y-5">

              {/* Date début */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-neutral-700">
                  Date de réservation
                </label>
                <input
                  type="date"
                  className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              {/* Date fin */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-neutral-700">
                  Nombre de Jour (limite 5)
                </label>
                <input
                  max={5}
                  type="number"
                  placeholder='Nombre de jour Max 5'
                  className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              {/*  Résumé */}
              <div className="bg-neutral-100 rounded-lg p-4 text-sm text-neutral-700">
                <div className="flex justify-between">
                  <span>Durée</span>
                  <span className="font-semibold">3 jours</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Prix / jour</span>
                  <span className="font-semibold">15 000 FCFA</span>
                </div>
                <div className="flex justify-between border-t pt-2 mt-2 font-bold">
                  <span>Total</span>
                  <span className="text-primary">45 000 FCFA</span>
                </div>
              </div>

              {/*  Actions */}
              <div className="flex gap-4 pt-2">
                <Button type="submit" className="w-full">
                  Confirmer la réservation
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
