import React, { useState } from 'react'
import Navbar from './../../composants/navbar/Navbar';
import Hero from './../../composants/Hero/Hero';
import Conteneur from './../../composants/Conteneur';
import { useCarContext } from '../../context/CarProvider';


const Home = () => {
  
  const {voitures} = useCarContext() 

  console.log(voitures)

  const [typeVoiture , setTypeVoiture] = useState('Tout');
  const types = ["Tout", "SUV","Berlin","4X4"];

  const filtrerType = typeVoiture === "Tout" ? voitures : voitures.filter((t) => t.type === typeVoiture );
   
  return (
    <div className="w-full h-screen">
       <Navbar/>
       <Hero/>
       <Conteneur>
          <div className="grid grid-cols-4 mx-auto  ">

            {/* filtrer par type  */}

            { 
              types.map((type,index) => (
                 <div 
                 key={index}
                 onClick={() => setTypeVoiture(type)}
                 className={` cursor-pointer px-3    font-semibold  transition-all duration-00
                  ${
                    typeVoiture === type ? 'text-primary border-b border-primary' :" border-b text-textColor cursor-pointer"
                  }
                 
                 `}>
                   <p className='mb-3 text-lg'>{type}</p>
                </div>
              ))
            }
            

          </div>
       </Conteneur>
    </div>
  )
}

export default Home
