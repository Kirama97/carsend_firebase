import React, { createContext, useContext } from 'react'

const CarContext = createContext()

const CarProvider = ({ children }) => {

  const voitures = [
    {
      id: 1,
      marque: "Toyota",
      modele: "Corolla",
      moteur: "Essence 1.8L",
      type: "Berline",
      transmission: "Automatique",
      couleur: "Blanc",
      nombreDeVitesses: 6,
      fonctionnalites: ["Climatisation", "Bluetooth", "Caméra de recul"],
      proprietaire: { nom: "Mamadou Ndiaye" },
      images: [
        "/images/toyota_corolla_1.jpg",
        "/images/toyota_corolla_2.jpg",
        "/images/toyota_corolla_3.jpg",
        "/images/toyota_corolla_4.jpg"
      ]
    },
    // ... autres voitures
  ]

  return (
    <CarContext.Provider value={{ voitures }}>
      {children}
    </CarContext.Provider>
  )
}

export const useCarContext = () => useContext(CarContext)

export default CarProvider
