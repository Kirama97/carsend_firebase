import React from 'react'
import im3 from '../../assets/images/im7.jpg'
import Button from './../Button';

const Hero = () => {
  return (
    <div className='w-full h-[100lvh] md:h-[60vh] bg-cover bg-center flex items-end' style={{ backgroundImage: `url(${im3})` }}
>
    <div className="w-full bg-neutral-900/40 backdrop-blur-sm   flex flex-col md:flex-row py-10 gap-y-10 justify-between px-[10%] ">
         <div className="">
            <h1  className='text-white text-2xl font-bold mb-10'>Location vente de voiture</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 divide-x divide-neutral-400">
                <div className="pr-3">
                    <h6 className='text-neutral-50 '>Date</h6>
                    <p className='text-neutral-300 '>29 Decembre 2025</p>
                </div>
                <div className="px-3">
                    <h6 className='text-neutral-50 '>Tarif</h6>
                    <p className='text-neutral-300   '>A partir de 25000 cfa</p>
                </div>
                <div className="pl-3">
                    <h6 className='text-neutral-50 '>Region</h6>
                    <p className='text-neutral-300  '>Thies / Senegal</p>
                </div>
            </div>
         </div>
         <div className="">
             
            <p className='text-sm max-w-md text-neutral-300 mb-3'>Nous vous proposons un service de location de voitures fiable, flexible et accessible, adapté à tous vos besoins de déplacement. Notre flotte variée vous garantit confort, sécurité et liberté à chaque trajet.</p>

            <Button className='w-full hover:bg-textHover'>Disponibles</Button>
           

         </div>

       </div>
    </div>
  )
}

export default Hero
