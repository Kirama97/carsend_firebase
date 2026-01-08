import { FaCarSide, FaCogs, FaGasPump } from "react-icons/fa";
import React from 'react';
import { useNavigate } from "react-router-dom";



const CarCard = React.memo(({ annonce }) => {

  const navigate = useNavigate()
   
  return (
    <div  onClick={() => navigate(`/annonce/${annonce.id}`) } className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
      
      {/* Image */}
      <div className="relative h-[100px] sm:h-52 overflow-hidden">
        <img
          src={annonce.images[0]}
          alt={annonce.modele}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Badge type */}
    
      <span className={`px-2 py-1 rounded-full text-xs font-bold absolute top-3 right-3
          ${annonce.disponible ? "bg-green-500 text-white" : "bg-red-500 text-white animate-pulse"}`}>
          {annonce.disponible ? "Disponible" : "Réservé"}
      </span>
      <span className="px-2 py-1 rounded-full text-xs font-bold absolute bottom-3 left-3 bg-orange-500 text-white animate-pulse"
         >
          {annonce.region }
         
      </span>

      </div>

      {/* Content */}
      <div className="p-3 sm:p-5 space-y-2 sm:space-y-3">
        
        {/* Marque & modèle */}
        <div>
          <h3 className="text-md sm:text-xl font-bold text-gray-800">
            {annonce.marque} {annonce.modele}
          </h3>
          {/* <p className="text-sm text-gray-500">{annonce.modele}</p> */}
        </div>

        {/* Infos */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <FaGasPump className="text-primary" />
            <span>{annonce.moteur}</span>
          </div>
        </div>

        {/* Options */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <FaCogs className="text-primary" />
            <span>{annonce.transmission}</span>
          </div>
          <div className="hidden sm:flex items-center gap-1">
            <FaCarSide className="text-primary" />
            <span>{annonce.nombreDeVitesses} vitesses</span>
          </div>
        </div>

        {/* Button */}
        <button
         onClick={() => navigate(`/annonce/${annonce.id}`) }
         className=" max-sm:hidden w-full mt-4 bg-primary max-sm:text-sm text-white py-2 rounded-xl  hover:bg-opacity-90 transition">
          {annonce.tarif} cfa / jour
        </button>
      </div>
    </div>


  );
});

export default CarCard;


