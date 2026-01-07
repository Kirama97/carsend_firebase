import React from 'react'
import { useParams , NavLink } from 'react-router-dom'
import Conteneur from '../../composants/Conteneur'
import { BsPinMap } from "react-icons/bs";
import Button from '../../composants/Button';

import kira from '../../assets/images/kira.png'



const DetailAnnonce = () => {


  const {id} = useParams()


    console.log("annoce id :" , id)

  return (
    <div className=' w-full my-[10vh]'>
      <Conteneur className="flex  items-center justify-between border-b border-neutral-50 py-[3%] bg-gradient-to-tr from-textColor to-green-800">
        <div className="flex items-center gap-2">
            <div className="image_profil w-10 h-10 rounded-full border  border-primary ">
                <img 
                src={kira}
                 className='w-full h-full object-cover'
                 alt="profil" srcset="" />
            </div>
            <div className=" ">
                <h3 className='text-md  font-semibold text-white'>Diene thiam</h3>
                 <div className="flex items-center gap-2 text-sm">
                     <BsPinMap className="text-primary" />
                      <span className="text-neutral-200">Thies</span>
                 </div>
            </div>
        </div>
        <div className="flex items-center gap-5">
            <NavLink className="text-md text-neutral-50">contact</NavLink>
            <Button>Reserver</Button>
        </div>

      </Conteneur>
    </div>
  )
}

export default DetailAnnonce
