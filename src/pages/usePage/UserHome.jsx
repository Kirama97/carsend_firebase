import React, { useState, useEffect, useMemo } from 'react';

import Hero from '../../composants/Hero/Hero';
import Conteneur from '../../composants/Conteneur';
import CarCard from '../../composants/CarCard';
import CarSkeleton from '../../composants/CarSkeleton';
import { useCarContext } from '../../context/CarProvider';
import Navbar from './../../composants/User/navbar/Navbar';
import image_pub from '../../assets/images/images_2.png'
import { IoNuclearOutline } from "react-icons/io5";


const UserHome = () => {
  const { voitures } = useCarContext();
  const [loading, setLoading] = useState(true);

  const [typeVoiture, setTypeVoiture] = useState('Tout');
  const [voitureDisponible, setVoitureDisponible] = useState("Disponible");

  const types = ["Tout", "SUV", "Berline", "4x4"];
  const disponible = ["Disponible", "Reserver"];

  // Optimisation du filtrage avec useMemo
  const voituresFiltrer = useMemo(() => {
  return voitures.filter(v => {
    const typeOk = typeVoiture === "Tout" || v.type === typeVoiture;
    const dispoOk = voitureDisponible === "Disponible" ? v.disponible === true : v.disponible === false;
    return typeOk && dispoOk;
  });
}, [voitures, typeVoiture, voitureDisponible]);


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full z-10 ">
      {/* <Navbar></Navbar> */}
      <Hero />
      <Conteneur className=" ">

        {/* button filter */}
        <div className="flex  flex-col items-center gap-y-5 sm:flex-row sm:items-center gap-3 sm:justify-between my-10">
          
          {/* Filtre type */}
          <div className="flex flex-wrap gap-2 justify-start sm:justify-start">
            {types.map((type, index) => (
              <button
                key={index}
                onClick={() => setTypeVoiture(type)}
                className={`px-3 py-2 text-sm md:text-base rounded-lg transition-all duration-200 ease-in-out
                  ${typeVoiture === type
                    ? "bg-primary text-white scale-105 shadow-lg"
                    : "text-textColor hover:bg-primary/10 hover:scale-105"
                  }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Filtre disponibilité */}
          <div className="flex flex-wrap gap-2">
            {disponible.map((dispo, index) => (
              <button
                key={index}
                onClick={() => setVoitureDisponible(dispo)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${voitureDisponible === dispo
                    ? "bg-primary text-white shadow-md scale-105"
                    : "border border-neutral-300 text-neutral-600 hover:bg-neutral-100"
                  }`}
              >
                {dispo}
              </button>
            ))}
          </div>

        </div>

        {/* Liste voitures */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <CarSkeleton key={i} />)
            : voituresFiltrer.map((voiture) => <CarCard key={voiture.id} voiture={voiture} />)
          }
        </div>
    
      </Conteneur>

        {/* section 2 */}
        <Conteneur  className='' >
           <h2 className="
            text-4xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-b from-primary to-neutral-50 bg-clip-text text-transparent my-10 text-center p-3 mb-[10%]">
            ON VOUS DONNE LE BONHEUR
          </h2>

            <div className=" sm:h-[90vh] gap-5  flex flex-col sm:flex-row  ">
               <div className="w-full sm:w-1/2  sm:h-full">
               <h2 className="text-2xl sm:text-4xl max-w-100 font-bold">Reserver Votre Voiture <br /> en Tout Securité</h2>
               <p className='text-pColor md:max-w-xl mt-10 text-sm'>Location de voitures modernes et fiables
                  Réservez facilement à des prix avantageux
                  Confort, sécurité et liberté pour tous vos déplacements</p>
            </div>
            <div className="relative w-full sm:w-1/2 flex items-center justify-center max-sm:mt-10  h-full">
              <IoNuclearOutline className='animate-spin absolute text-primary  h-5 w-5 sm:h-20 sm:w-20 top-0 left-5 ' />
              <IoNuclearOutline className='animate-spin absolute text-primary   h-5 w-5 sm:h-20 sm:w-20 bottom-0 right-5 ' />
            
              <img className='max-sm:w-full max-sm:h-full' src={image_pub} alt="" srcset="" />
           </div>
            </div>
       </Conteneur>
      
    </div>
  );
}

export default UserHome 
