import React, { useState , useEffect } from 'react'
import Navbar from './../../composants/navbar/Navbar';
import Hero from './../../composants/Hero/Hero';
import Conteneur from './../../composants/Conteneur';
import { useCarContext } from '../../context/CarProvider';
import { NavLink } from 'react-router-dom';
import CarCard from '../../composants/CarCard';
import CarSkeleton from '../../composants/CarSkeleton';


const Home = () => {
  
  const {voitures} = useCarContext() 
  const [loading, setLoading] = useState(true);



  const [typeVoiture , setTypeVoiture] = useState('Tout');
  const [voitureDisponible , setVoitureDisponible] = useState("Disponible");
  const types = ["Tout", "SUV","Berline","4x4"];
  const disponible = ["Disponible" , "Reserver"];


  const voituresFiltrer = voitures
    .filter(v =>
      typeVoiture === "Tout" ? true : v.type === typeVoiture
    )
    .filter(v =>
      voitureDisponible === "Disponible"
        ? v.disponible === true
        : v.disponible === false
    );

    useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1500); //

  return () => clearTimeout(timer);
}, []);

  

  return (
    <div className="w-full h-screen z-10">
    
       <Hero/>
       <Conteneur>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
              <div className=" sm:max-w-2xl grid grid-cols-4  gap-2  ">

              {/* filtrer par type  */}

             {types.map((type, index) => (
              <button
                key={index}
                onClick={() => setTypeVoiture(type)}
                className={`relative px-2 sm:px-4 py-2 text-sm md:text-base  rounded-lg
                  transition-all duration-200 ease-in-out
                  ${
                    typeVoiture === type
                      ? "bg-primary text-white scale-105 shadow-lg"
                      : "text-textColor hover:bg-primary/10 hover:scale-105"
                  }
                `}
              >
                {type}
              </button>
            ))}
     
            </div>
           {/* filtrage par disponiblite */}    
          <div className="flex items-center gap-5">
           {disponible.map((dispo, index) => (
            <button
              key={index}
              onClick={() => setVoitureDisponible(dispo)}
              className={`px-4 py-2 rounded-full text-sm font-medium
                transition-all duration-300
                ${
                  voitureDisponible === dispo
                    ? "bg-primary text-white shadow-md scale-105"
                    : "border border-neutral-300 text-neutral-600 hover:bg-neutral-100"
                }
              `}
            >
              {dispo}
            </button>
          ))}

          </div>


          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 my-[7%] ">
             { 

             loading 
             ? Array.from({length:8}).map((_, i) => (
                    <CarSkeleton key={i} />
             ))
             : voituresFiltrer.map((voiture ) => (
                  <CarCard key={voiture.id} voiture={voiture} />
                 
              ))
             }
          </div>

          
       </Conteneur>
    </div>
  )
}

export default Home
