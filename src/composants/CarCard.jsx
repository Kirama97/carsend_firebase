import { FaCarSide, FaCogs, FaGasPump } from "react-icons/fa";

const CarCard = ({ voiture }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
      
      {/* Image */}
      <div className="relative h-[100px] sm:h-52 overflow-hidden">
        <img
          src={voiture.images[0]}
          alt={voiture.modele}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Badge type */}
    
      <span className={`px-2 py-1 rounded-full text-xs font-bold absolute top-3 right-3
          ${voiture.disponible ? "bg-green-500 text-white" : "bg-red-500 text-white animate-pulse"}`}>
          {voiture.disponible ? "Disponible" : "Réservé"}
      </span>
      <span className={`px-2 py-1 rounded-full text-xs font-bold absolute bottom-3 left-3
         ${voiture.region === "Thies" ? "bg-yellow-500 text-white" : "bg-orange-500 text-white animate-pulse"}`}>
          {voiture.region === "Thies" ? " 🏳️ Thies" : " 🏳️ Dakar"}
      </span>

    

      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        
        {/* Marque & modèle */}
        <div>
          <h3 className="text-md sm:text-xl font-bold text-gray-800">
            {voiture.marque} {voiture.modele}
          </h3>
          {/* <p className="text-sm text-gray-500">{voiture.modele}</p> */}
        </div>

        {/* Infos */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <FaGasPump className="text-primary" />
            <span>{voiture.moteur}</span>
          </div>
        </div>

        {/* Options */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <FaCogs className="text-primary" />
            <span>{voiture.transmission}</span>
          </div>
          <div className="hidden sm:flex items-center gap-1">
            <FaCarSide className="text-primary" />
            <span>{voiture.nombreDeVitesses} vitesses</span>
          </div>
        </div>

        {/* Button */}
        <button className=" max-sm:hidden w-full mt-4 bg-primary max-sm:text-sm text-white py-2 rounded-xl  hover:bg-opacity-90 transition">
          Voir détails
        </button>
      </div>
    </div>


  );
};

export default CarCard;


