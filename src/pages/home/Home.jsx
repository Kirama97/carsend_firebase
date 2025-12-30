import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './../../composants/navbar/Navbar';
import Hero from './../../composants/Hero/Hero';
import Conteneur from './../../composants/Conteneur';
import { useCarContext } from '../../context/CarProvider';
import CarCard from '../../composants/CarCard';
import CarSkeleton from '../../composants/CarSkeleton';

const Home = () => {
  const { voitures } = useCarContext();
  const [loading, setLoading] = useState(true);

  const [typeVoiture, setTypeVoiture] = useState('Tout');
  const [voitureDisponible, setVoitureDisponible] = useState("Disponible");

  const types = ["Tout", "SUV", "Berline", "4x4"];
  const disponible = ["Disponible", "Reserver"];

  // Optimisation du filtrage avec useMemo
  const voituresFiltrer = useMemo(() => {
    return voitures
      .filter(v => typeVoiture === "Tout" ? true : v.type === typeVoiture)
      .filter(v =>
        voitureDisponible === "Disponible" ? v.disponible === true : v.disponible === false
      );
  }, [voitures, typeVoiture, voitureDisponible]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full z-10">
      <Hero />
      <Conteneur>

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
    </div>
  );
};

export default Home;
