import React, { useState } from 'react'
import {auth} from "../../config/firebase-config"
import {createUserWithEmailAndPassword} from "firebase/auth"
import {NavLink} from 'react-router-dom'

import { CiUser } from "react-icons/ci";
import { MdOutlineAttachEmail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import { motion } from "framer-motion"
import { FaRobot } from "react-icons/fa";
import { PiHandWavingFill } from "react-icons/pi";
import { FaCar } from "react-icons/fa";


const Login = () => {
  return (
    
         <div className="w-screen h-[100vh] p-[2%] bg-gradient-to-r from-sky-50 to-blue-200">
            <div className=" flex overflow-hidden w-full h-full bg-gradient-to-l from-neutral-50 to-blue-100 rounded-md shadow-sm border-2 border-neutral-100 ">

                <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 1.5 }}      
                 className="hidden sm:flex flex-col justify-center gap-5 md:gap-10 px-10 py-5 w-1/2 ">
                   <div  className="flex items-center gap-5 text-3xl mb-2 text-primary">
                     <h1 className=" text-4xl md:text-4xl lg:text-6xl text-primary font-bold ">CarSend</h1>
                     <FaCar  className="animate-wave animate-wave text-4xl md:text-4xl lg:text-6xl" />
                   </div>
                   <h3 className=' md:text-2xl lg:text-4xl max-w-lg text-textColor font-semibold '>Ton monde automobile, réuni sur une seule plateforme.</h3>
                   <p className="text-sm md:text-md text-pretty text-pColor">Simple, rapide et fiable, elle vous permet de réaliser tous vos projets automobiles en toute confiance, avec une expérience moderne adaptée à vos besoins.</p>
                </motion.div>
                <div className="w-full sm:w-1/2 ">
           
                    <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.9 }}       
                          className=" h-full rounded-lg shadow-xl bg-white py-10  px-5 md:px-5 lg:px-10">
                             {/* logo en sm */}
                            <div  className="flex sm:hidden  justify-center items-center gap-5 text-3xl mb-10 text-primary">
                              <h1 className=" text-4xl md:text-4xl lg:text-6xl text-primary font-bold ">CarSend</h1>
                              <FaCar  className=" animate-car text-4xl md:text-4xl lg:text-6xl" />
                           </div>

                         <div className="flex items-center gap-5 text-3xl mb-2 text-primary">
                           <h3 className='font-bold text-2xl '>De retour </h3>
                           <PiHandWavingFill className="hidden sm:flex animate-wave" /> 
                        </div>
                        <p className='text-neutral-500'>Connectez-vous pour acceder a la plaform</p>
  
                   <form  className='mt-10'>
  
                    
                       {/* email */}
  
   
                          <div className="input flex flex-col mt-5 ">
                             <label className="text-sm " htmlFor="email">Email</label>
                                <div className="shadow-sm mt-2 group rounded-xl px-3 overflow-hidden  flex items-center   border-2 border-neutral-200 focus-within:border-blue-300 focus-within:ring focus-within:ring-blue-200">
                                   <MdOutlineAttachEmail  className="text-xl text-neutral-800  group-focus-within:text-blue-500" />                      
                               
  
                                   <input 
                                      className="py-2 text-sm px-3 w-full focus:outline-none"
                                      type="emal" 
                                      placeholder="toi@exemple.com"
                                      />
                                </div>                     
                          </div>

                          
                       {/* mots de passe */}
                       
                             <div className="input flex flex-col mt-5 ">
                                <label className="text-sm"  htmlFor="password">Mots de Passe</label>
                                 <div className="shadow-sm mt-2 group rounded-xl px-3 overflow-hidden  flex items-center  border-2 border-neutral-200 focus-within:border-blue-300 focus-within:ring focus-within:ring-blue-200">
                                      <MdPassword  className="text-xl text-neutral-800  group-focus-within:text-blue-500" />                      
  
                                      <input 
                                      className="py-2 text-sm px-3 w-full focus:outline-none"
                                      type="password" 
                                      placeholder="xxxxxxx"
                                      />
                                   </div>                     
                             </div>
                           <button className="w-full text-sm text-white py-2 mt-10 text-center bg-primary rounded-xl shadow-sm transition-all duration-200 hover:bg-textHover ">
                              Inscription
                           </button>
                           <p className='text-neutral-600 mt-4 text-center' >Vous n'avez pas de compte <NavLink to="/inscription" className="text-primary hover:textHover">inscrivez-vous</NavLink> </p>
              
   
                      </form>
                     
                   </motion.div>
                  
                </div>
            </div>
         </div>
  )
}

export default Login
