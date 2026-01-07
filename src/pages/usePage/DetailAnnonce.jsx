import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import Conteneur from '../../composants/Conteneur'
import { BsPinMap } from "react-icons/bs"
import Button from '../../composants/Button'
import kira from '../../assets/images/kira.png'
import { useCarContext } from '../../context/CarProvider'
import { 
  FaGasPump, 
  FaCogs, 
  FaTachometerAlt, 
  FaPalette 
} from "react-icons/fa";


const DetailAnnonce = () => {

  const { id } = useParams()


  const { voitures} = useCarContext()

  const annonce = voitures.find((v) => v.id == id  );

  

  // 🔹 Données mock (plus tard Firebase / API)

  // const annonce = {
  //   id: 1,
  //   marque: "Toyota",
  //   region: "Thies",
  //   modele: "Corolla",
  //   moteur: "Essence 1.8L",
  //   type: "Berline",
  //   transmission: "Automatique",
  //   couleur: "Blanc",
  //   nombreDeVitesses: 6,
  //   disponible: true,
  //   vente: false,
  //   proprietaire: { nom: "Mamadou Ndiaye" },
  //   fonctionnalites: [
  //     "Climatisation",
  //     "Bluetooth",
  //     "Caméra de recul"
  //   ],
  //   images: [
  //     "https://images.unsplash.com/photo-1617814076367-b759c7d7e738",
  //     "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
  //     "https://images.unsplash.com/photo-1590362891991-f776e747a588",
  //     "https://images.unsplash.com/photo-1601924579440-10c5c38a5bb1"
  //   ]
  // }

  const reservations = [
    {
      client: "Alioune Fall",
      debut: "10/01/2026",
      fin: "12/01/2026",
      statut: "Confirmée",
      montant: "45 000 FCFA"
    },
    {
      client: "Fatou Diop",
      debut: "20/12/2025",
      fin: "22/12/2025",
      statut: "Terminée",
      montant: "40 000 FCFA"
    }
  ]

  return (
    <div className="w-full min-h-screen bg-gradient-to-tr from-textColor to-green-800">

      {/* ================= HEADER ================= */}
      <Conteneur className="flex pt-[15vh] items-center justify-between border-b border-green-600 py-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-primary overflow-hidden">
            <img src={kira} className="w-full h-full object-cover" alt="profil" />
          </div>

          <div>
            <h3 className="text-md font-semibold text-white">
              {annonce.proprietaire.nom}
            </h3>
            <div className="flex items-center gap-2 text-sm">
              <BsPinMap className="text-primary" />
              <span className="text-neutral-200">{annonce.region}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <NavLink className="text-neutral-50">Contact</NavLink>
          <Button>Réserver</Button>
        </div>
      </Conteneur>

      {/* ================= CONTENU ================= */}
      <Conteneur className="grid grid-cols-3 gap-6 py-10">

        {/* ===== GAUCHE ===== */}
        <div className=" col-span-2 space-y-6">

          {/* Galerie */}
          <div className="grid grid-cols-4 gap-3 bg-neutral-900/40 p-4 rounded-xl overflow-x-auto">
            {annonce.images.map((img, index) => (
              <img
                key={index}
                src={img}
                className="h-32 w-full object-cover rounded-lg hover:scale-105 transition cursor-pointer"
                alt="voiture"
              />
            ))}
          </div>

          {/* Infos principales */}
          <div className="bg-neutral-900/40 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white">
              {annonce.marque} {annonce.modele}
            </h2>

            <p className="text-neutral-300 mt-2">
              Type : <span className="font-semibold">{annonce.type}</span>
            </p>

            <span
              className={`inline-block mt-3 px-4 py-1 text-white rounded-full text-sm
              ${annonce.disponible ? "bg-green-600" : "bg-red-600"}`}
            >
              {annonce.disponible ? "Disponible" : "Indisponible"}
            </span>
          </div>

          {/* Caractéristiques */}
          <div className="bg-neutral-900/40 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">
              Caractéristiques
            </h3>

           <div className="grid grid-cols-2 gap-4 text-sm">

            <div className="flex items-center gap-2 text-neutral-300">
              <FaGasPump className="text-primary text-lg" />
              <span>Moteur</span>
            </div>
            <span className="text-white font-semibold">
              {annonce.moteur}
            </span>

            <div className="flex items-center gap-2 text-neutral-300">
              <FaCogs className="text-primary text-lg" />
              <span>Transmission</span>
            </div>
            <span className="text-white font-semibold">
              {annonce.transmission}
            </span>

            <div className="flex items-center gap-2 text-neutral-300">
              <FaTachometerAlt className="text-primary text-lg" />
              <span>Vitesses</span>
            </div>
            <span className="text-white font-semibold">
              {annonce.nombreDeVitesses}
            </span>

            <div className="flex items-center gap-2 text-neutral-300">
              <FaPalette className="text-primary text-lg" />
              <span>Couleur</span>
            </div>
            <span className="text-white font-semibold">
              {annonce.couleur}
            </span>

          </div>

          </div>

          {/* Fonctionnalités */}
          <div className="bg-neutral-900/40 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">
              Fonctionnalités
            </h3>

            <div className="flex flex-wrap gap-3">
              {annonce.fonctionnalites.map((f, i) => (
                <span
                  key={i}
                  className="bg-primary/20 text-primary px-4 py-1 rounded-full text-sm"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Historique réservations */}
          <div className="bg-neutral-900/40 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">
              Historique des réservations
            </h3>

            <table className="w-full text-sm text-neutral-300">
              <thead>
                <tr className="border-b border-neutral-700">
                  <th className="py-2">Client</th>
                  <th>Début</th>
                  <th>Fin</th>
                  <th>Statut</th>
                  <th>Montant</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((r, i) => (
                  <tr
                    key={i}
                    className="border-b border-neutral-800 text-center"
                  >
                    <td className="py-2">{r.client}</td>
                    <td>{r.debut}</td>
                    <td>{r.fin}</td>
                    <td className="text-green-500">{r.statut}</td>
                    <td className="font-semibold">{r.montant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

        {/* ===== DROITE ===== */}
        <div className="  max-md:hidden col-span-1 bg-neutral-900/40 rounded-xl p-6 h-fit sticky top-28">
          <h3 className="text-xl font-bold text-white mb-4">
            Réservation
          </h3>

          <p className="text-neutral-300 text-sm mb-6">
            Choisissez vos dates et confirmez la réservation.
          </p>

          <Button className="w-full">
            Réserver maintenant
          </Button>
        </div>

      </Conteneur>
    </div>
  )
}

export default DetailAnnonce
