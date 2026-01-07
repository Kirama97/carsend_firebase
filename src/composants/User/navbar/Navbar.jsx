import React from 'react';
import Button from '../../Button';
import {NavLink, useNavigate } from 'react-router-dom'
import { FaSignOutAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useAuth } from '../../../context/AuthProvider';
import { toast } from 'react-toastify';
import { useCarContext } from '../../../context/CarProvider';
import logo from '../../../assets/images/logo.png'


const Navbar = () => {


  const {logout  ,user} = useAuth()
  const { NavActive} = useCarContext()
  const navigate = useNavigate()
  if(!user) return null ;
 
  // Deconnexion
  const handleLogout = async () => {
  // alert('ok')
  await logout();
  navigate("/connexion" , {replace: true});
  toast.success("Au revoir");


  }
   
  return (
    <nav className="z-50 w-full fixed top-0 right-0 bg-neutral-50/80 backdrop-blur-sm flex items-center justify-between py-3 sm:py-5 px-6 md:px-[10%] shadow-md">
      <NavLink to="/accueil">
        <img className='h-7 w-30 sm:h-10  sm:w-30' src={logo} alt="" srcset="" />
      </NavLink>
       <div className="sm:flex items-center gap-10 hidden ">
         <NavLink to="/accueil" className={NavActive}>Accueil</NavLink>
         <NavLink to="/parking" className={NavActive}>Parking</NavLink>
         <NavLink to="/reservations" className={NavActive}>Réservations</NavLink>
       </div>

      <div className="flex items-center gap-3 ">
         <Button onClick={() => navigate("/profil")} className="bg-primary text-primary text-sm px-5 py-2 rounded-lg hover:bg-HoverColor transition duration-300">
           <FaUser />
        </Button>
        <Button 
          onClick={handleLogout}
          title="Deconnexion" className="bg-textColor text-white text-sm px-5 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
          <FaSignOutAlt />
        </Button>
       
      </div>
    </nav>
  );
};

export default Navbar;


