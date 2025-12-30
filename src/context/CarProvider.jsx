import React, { createContext, useContext } from 'react'

const CarContext = createContext()

const CarProvider = ({ children }) => {

const voitures = [
  {
    id: 1,
    marque: "Toyota",
    region:"Thies",
    modele: "Corolla",
    moteur: "Essence 1.8L",
    type: "Berline",
    transmission: "Automatique",
    couleur: "Blanc",
    nombreDeVitesses: 6,
    disponible: true,
    vente: false,
    proprietaire: { nom: "Mamadou Ndiaye" },
    fonctionnalites: ["Climatisation", "Bluetooth", "Caméra de recul"],
    images: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
      "https://images.unsplash.com/photo-1590362891991-f776e747a588",
      "https://images.unsplash.com/photo-1601924579440-10c5c38a5bb1"
    ]
  },
  {
    id: 2,
    marque: "Hyundai",
    region:"Thies",
    modele: "Elantra",
    moteur: "Hybride 2.0L",
    type: "Berline",
    transmission: "Automatique",
    couleur: "Gris",
    nombreDeVitesses: 6,
    disponible: false,
    vente: true,
    proprietaire: { nom: "Aissatou Diallo" },
    fonctionnalites: ["GPS", "Écran tactile", "Régulateur de vitesse"],
    images: [
      "https://images.unsplash.com/photo-1621993202323-f438eec93464",
      "https://images.unsplash.com/photo-1609520505218-7421b3d7b43c",
      "https://images.unsplash.com/photo-1617814066204-ec7fa3a4b9f2",
      "https://images.unsplash.com/photo-1617814071434-0f6b6c1eaf6c"
    ]
  },
  {
    id: 3,
    marque: "Kia",
    region:"Thies",
    modele: "Sportage",
    moteur: "Diesel 2.0L",
    type: "SUV",
    transmission: "Automatique",
    couleur: "Noir",
    nombreDeVitesses: 8,
    disponible: true,
    vente: true,
    proprietaire: { nom: "Cheikh Ba" },
    fonctionnalites: ["Toit panoramique", "Caméra 360°", "ABS"],
    images: [
      "https://images.unsplash.com/photo-1626072557464-904d3d7edc6c",
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1b",
      "https://images.unsplash.com/photo-1617814046362-69bc9b87222e",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2"
    ]
  },
  {
    id: 4,
    marque: "Peugeot",
    region:"Thies",
    modele: "308",
    moteur: "Hybride 1.6L",
    type: "Berline",
    transmission: "Manuelle",
    couleur: "Bleu",
    nombreDeVitesses: 5,
    disponible: false,
    vente: false,
    proprietaire: { nom: "Fatou Ndiaye" },
    fonctionnalites: ["Climatisation", "Aide au stationnement"],
    images: [
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae",
      "https://images.unsplash.com/photo-1601924638867-3ec62b5c8b88",
      "https://images.unsplash.com/photo-1605559424861-37e2b2fc90d4",
      "https://images.unsplash.com/photo-1617814068799-7c5b0a7c0a4f"
    ]
  },
  {
    id: 5,
    marque: "Nissan",
    region:"Thies",
    modele: "Qashqai",
    moteur: "Essence 1.3L",
    type: "SUV",
    transmission: "Automatique",
    couleur: "Rouge",
    nombreDeVitesses: 7,
    disponible: true,
    vente: false,
    proprietaire: { nom: "Ousmane Sow" },
    fonctionnalites: ["Démarrage sans clé", "Capteurs parking", "Bluetooth"],
    images: [
      "https://images.unsplash.com/photo-1549924231-f129b911e442",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      "https://images.unsplash.com/photo-1542362567-b07e54358753",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2"
    ]
  },
  {
    id: 6,
    marque: "Toyota",
    region:"Thies",
    modele: "RAV4",
    moteur: "Hybride 2.5L",
    type: "4x4",
    transmission: "Automatique",
    couleur: "Gris",
    nombreDeVitesses: 8,
    disponible: true,
    vente: true,
    proprietaire: { nom: "Ibrahima Diop" },
    fonctionnalites: ["4x4", "Caméra 360°", "GPS"],
    images: [
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1b",
      "https://images.unsplash.com/photo-1617814046362-69bc9b87222e",
      "https://images.unsplash.com/photo-1549924231-f129b911e442",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d"
    ]
  },
  {
    id: 7,
    marque: "Ford",
    region:"Thies",
    modele: "Explorer",
    moteur: "Essence 3.0L",
    type: "4x4",
    transmission: "Automatique",
    couleur: "Noir",
    nombreDeVitesses: 10,
    disponible: false,
    vente: true,
    proprietaire: { nom: "Abdoulaye Kane" },
    fonctionnalites: ["7 places", "Toit panoramique", "Caméra 360°"],
    images: [
      "https://images.unsplash.com/photo-1542362567-b07e54358753",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738",
      "https://images.unsplash.com/photo-1549924231-f129b911e442"
    ]
  },
  {
    id: 8,
    marque: "Mercedes",
    region:"Thies",
    modele: "Classe C",
    moteur: "Hybride 2.0L",
    type: "Berline",
    transmission: "Automatique",
    couleur: "Noir",
    nombreDeVitesses: 9,
    disponible: true,
    vente: true,
    proprietaire: { nom: "Serigne Fall" },
    fonctionnalites: ["Intérieur cuir", "GPS", "Régulateur adaptatif"],
    images: [
      "https://images.unsplash.com/photo-1609520505218-7421b3d7b43c",
      "https://images.unsplash.com/photo-1621993202323-f438eec93464",
      "https://images.unsplash.com/photo-1617814066204-ec7fa3a4b9f2",
      "https://images.unsplash.com/photo-1617814071434-0f6b6c1eaf6c"
    ]
  },
  {
    id: 9,
    marque: "BMW",
    region:"Thies",
    modele: "X5",
    moteur: "Diesel 3.0L",
    type: "4x4",
    transmission: "Automatique",
    couleur: "Blanc",
    nombreDeVitesses: 8,
    disponible: false,
    vente: true,
    proprietaire: { nom: "Pape Sy" },
    fonctionnalites: ["Suspension sport", "Caméra 360°", "GPS"],
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      "https://images.unsplash.com/photo-1542362567-b07e54358753",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738",
      "https://images.unsplash.com/photo-1549924231-f129b911e442"
    ]
  },
  {
    id: 10,
    marque: "Renault",
    region:"Thies",
    modele: "Kangoo",
    moteur: "Diesel 1.5L",
    type: "Berling",
    transmission: "Manuelle",
    couleur: "Blanc",
    nombreDeVitesses: 5,
    disponible: true,
    vente: false,
    proprietaire: { nom: "Babacar Seck" },
    fonctionnalites: ["Grand coffre", "Climatisation", "Bluetooth"],
    images: [
      "https://images.unsplash.com/photo-1601924579440-10c5c38a5bb1",
      "https://images.unsplash.com/photo-1590362891991-f776e747a588",
      "https://images.unsplash.com/photo-1605559424861-37e2b2fc90d4",
      "https://images.unsplash.com/photo-1617814068799-7c5b0a7c0a4f"
    ]
  },
  {
    id: 11,
    marque: "Audi",
    region:"Dakar",
    modele: "A4",
    moteur: "Hybride 2.0L",
    type: "Berline",
    transmission: "Automatique",
    couleur: "Gris",
    nombreDeVitesses: 7,
    disponible: true,
    vente: true,
    proprietaire: { nom: "Alioune Diouf" },
    fonctionnalites: ["GPS", "Caméra arrière", "Intérieur cuir"],
    images: [
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16",
      "https://images.unsplash.com/photo-1609520505218-7421b3d7b43c",
      "https://images.unsplash.com/photo-1617814066204-ec7fa3a4b9f2",
      "https://images.unsplash.com/photo-1617814071434-0f6b6c1eaf6c"
    ]
  },
  {
    id: 12,
    marque: "Volkswagen",
      region:"Dakar",
    modele: "Golf 8",
    moteur: "Essence 1.5L",
    type: "Berline",
    transmission: "Manuelle",
    couleur: "Bleu",
    nombreDeVitesses: 6,
    disponible: true,
    vente: false,
    proprietaire: { nom: "Khady Fall" },
    fonctionnalites: ["Bluetooth", "Climatisation", "Aide au freinage"],
    images: [
      "https://images.unsplash.com/photo-1590362891991-f776e747a588",
      "https://images.unsplash.com/photo-1601924579440-10c5c38a5bb1",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
      "https://images.unsplash.com/photo-1605559424861-37e2b2fc90d4"
    ]
  },
  {
    id: 13,
    marque: "Mazda",
    region:"Dakar",
    modele: "CX-5",
    moteur: "Essence 2.5L",
    type: "SUV",
    transmission: "Automatique",
    couleur: "Rouge",
    nombreDeVitesses: 6,
    disponible: false,
    vente: true,
    proprietaire: { nom: "Lamine Gaye" },
    fonctionnalites: ["Caméra 360°", "Toit ouvrant", "ABS"],
    images: [
      "https://images.unsplash.com/photo-1549924231-f129b911e442",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      "https://images.unsplash.com/photo-1542362567-b07e54358753",
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1b"
    ]
  },
  {
    id: 14,
    marque: "Chevrolet",
    region:"Dakar",
    modele: "Captiva",
    moteur: "Diesel 2.0L",
    type: "SUV",
    transmission: "Automatique",
    couleur: "Noir",
    nombreDeVitesses: 6,
    disponible: true,
    vente: false,
    proprietaire: { nom: "Moustapha Sarr" },
    fonctionnalites: ["GPS", "Bluetooth", "Capteurs parking"],
    images: [
      "https://images.unsplash.com/photo-1617814046362-69bc9b87222e",
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1b",
      "https://images.unsplash.com/photo-1549924231-f129b911e442",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d"
    ]
  },
  {
    id: 15,
    marque: "Range Rover",
    region:"Dakar",
    modele: "Evoque",
    moteur: "Hybride 2.0L",
    type: "4x4",
    transmission: "Automatique",
    couleur: "Blanc",
    nombreDeVitesses: 9,
    disponible: false,
    vente: true,
    proprietaire: { nom: "Awa Ndiour" },
    fonctionnalites: ["Suspension intelligente", "GPS", "Caméra 360°"],
    images: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738",
      "https://images.unsplash.com/photo-1542362567-b07e54358753",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      "https://images.unsplash.com/photo-1549924231-f129b911e442"
    ]
  },
  {
    id: 16,
    marque: "Dacia",
    region:"Dakar",
    modele: "Duster",
    moteur: "Diesel 1.5L",
    type: "SUV",
    transmission: "Manuelle",
    couleur: "Gris",
    nombreDeVitesses: 6,
    disponible: true,
    vente: false,
    proprietaire: { nom: "Modou Thiam" },
    fonctionnalites: ["Mode 4x4", "Climatisation", "Bluetooth"],
    images: [
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
      "https://images.unsplash.com/photo-1601924579440-10c5c38a5bb1",
      "https://images.unsplash.com/photo-1590362891991-f776e747a588",
      "https://images.unsplash.com/photo-1605559424861-37e2b2fc90d4"
    ]
  },
  {
    id: 17,
    marque: "Tesla",
    region:"Dakar",
    modele: "Model 3",
    moteur: "Électrique",
    type: "Berline",
    transmission: "Automatique",
    couleur: "Blanc",
    nombreDeVitesses: 1,
    disponible: true,
    vente: true,
    proprietaire: { nom: "Cheikh Tidiane Diop" },
    fonctionnalites: ["Autopilot", "Écran tactile", "Caméras 360°"],
    images: [
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16",
      "https://images.unsplash.com/photo-1617814066204-ec7fa3a4b9f2",
      "https://images.unsplash.com/photo-1617814071434-0f6b6c1eaf6c",
      "https://images.unsplash.com/photo-1609520505218-7421b3d7b43c"
    ]
  },
  {
    id: 18,
    marque: "Suzuki",
    region:"Dakar",
    modele: "Vitara",
    moteur: "Essence 1.6L",
    type: "SUV",
    transmission: "Manuelle",
    couleur: "Vert",
    nombreDeVitesses: 5,
    disponible: false,
    vente: false,
    proprietaire: { nom: "Ndeye Astou Mbaye" },
    fonctionnalites: ["Faible consommation", "Bluetooth", "Climatisation"],
    images: [
      "https://images.unsplash.com/photo-1605559424861-37e2b2fc90d4",
      "https://images.unsplash.com/photo-1590362891991-f776e747a588",
      "https://images.unsplash.com/photo-1601924579440-10c5c38a5bb1",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2"
    ]
  },
  {
    id: 19,
    marque: "Mitsubishi",
    region:"Dakar",
    modele: "Pajero",
    moteur: "Diesel 3.2L",
    type: "4x4",
    transmission: "Automatique",
    couleur: "Noir",
    nombreDeVitesses: 8,
    disponible: true,
    vente: true,
    proprietaire: { nom: "Boubacar Diallo" },
    fonctionnalites: ["Tout-terrain", "Blocage différentiel", "GPS"],
    images: [
      "https://images.unsplash.com/photo-1542362567-b07e54358753",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738",
      "https://images.unsplash.com/photo-1549924231-f129b911e442"
    ]
  },
  {
    id: 20,
    marque: "Citroën",
    region:"Dakar",
    modele: "Berlingo",
    moteur: "Diesel 1.6L",
    type: "Berling",
    transmission: "Manuelle",
    couleur: "Blanc",
    nombreDeVitesses: 5,
    disponible: true,
    vente: false,
    proprietaire: { nom: "Oumar Faye" },
    fonctionnalites: ["Grand coffre", "Portes coulissantes", "Bluetooth"],
    images: [
      "https://images.unsplash.com/photo-1601924579440-10c5c38a5bb1",
      "https://images.unsplash.com/photo-1590362891991-f776e747a588",
      "https://images.unsplash.com/photo-1605559424861-37e2b2fc90d4",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2"
    ]
  }
];




  
  return (
    <CarContext.Provider value={{ voitures }}>
      {children}
    </CarContext.Provider>
  )
}

export const useCarContext = () => useContext(CarContext)

export default CarProvider
