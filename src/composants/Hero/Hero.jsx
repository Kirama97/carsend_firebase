import React from 'react'
import im3 from '../../assets/images/im7.jpg'
import Button from './../Button';

const Hero = () => {
  return (
    <div className=' w-full h-screen bg-cover bg-center flex items-end' style={{ backgroundImage: `url(${im3})` }}
>
    <div className="w-full max-sm:h-[80vh] bg-neutral-900/40 backdrop-blur-sm  flex flex-col  py-10 gap-3  px-[7%] md:px-[10%] ">
       
            <h1  className='text-white text-2xl md:text-4xl font-bold mb-10'>Location vente de voiture</h1>
              <p className='text-sm max-w-md text-neutral-300 mb-3'>Nous vous proposons un service de location de   voitures fiable, flexible et accessible, adapté à tous vos besoins de déplacement. Notre flotte variée  vous garantit confort, sécurité et liberté à chaque trajet.
            </p>
           
            <div className="grid bg-textColor rounded-lg p-5 shadow-sm grid-cols-1 md:grid-cols-4 gap-5 divide-x divide-neutral-400">
                <div className="pr-3 ">
                    <h6 className='text-neutral-50 mb-3'>Marque</h6>
                      <select
                        className="
                            w-full
                            px-4 py-2
                            text-sm text-neutral-800
                            bg-white
                            border border-neutral-300
                            rounded-lg
                            shadow-sm
                            focus:outline-none
                            focus:ring-2 focus:ring-primary
                            focus:border-primary
                        "
                        >
                        <option value="">Choisir une marque</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        </select>
                </div>
                <div className="px-3">
                    <h6 className='text-neutral-50 mb-3 '>Transmission</h6>
                     <select
                        className="
                            w-full
                            px-4 py-2
                            text-sm text-neutral-800
                            bg-white
                            border border-neutral-300
                            rounded-lg
                            shadow-sm
                            focus:outline-none
                            focus:ring-2 focus:ring-primary
                            focus:border-primary
                        "
                        >
                        <option value="">Boite de vitesse</option>
                        <option value="1">Manuelle</option>
                        <option value="2">Automatique</option>
                        
                        </select>
                </div>
                <div className="pl-3">
                    <h6 className='text-neutral-50  mb-3'>Region</h6>
                        <select
                        className="
                            w-full
                            px-4 py-2
                            text-sm text-neutral-800
                            bg-white
                            border border-neutral-300
                            rounded-lg
                            shadow-sm
                            focus:outline-none
                            focus:ring-2 focus:ring-primary
                            focus:border-primary
                        "
                        >
                        <option value="">la Region</option>
                        <option value="thies">Thies</option>
                        <option value="dakar">Dakar</option>
                        
                        </select>
                </div>
                 <Button className='w-full hover:bg-textHover py-3 shadow-md'>recherche</Button>

            </div>
        

       </div>
    </div>
  )
}

export default Hero
