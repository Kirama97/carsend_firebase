import React, { useState } from 'react'
import {auth} from "../../config/firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"

import { CiUser } from "react-icons/ci";
import { MdOutlineAttachEmail } from "react-icons/md";
import { MdPassword } from "react-icons/md";


const Register = (e) => {

  const [email ,setEmail] = useState("")
  const [password ,setPassword] = useState("")

   const inscrire = async (e) => {
      
   e.preventDefault()
     
    //  if(!email == "" || !password == "") {
    //   alert("veuillez remplir tous les champs")

    //   return
    //  }
     try {
       const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
       )
       console.log("utlisateur cree :" , userCredential.user)
     } catch(error) {
       console.log(error.code , error.message)
     }
   

   }


  return (
  
       <div className="w-screen h-[100vh] p-[2%] bg-gradient-to-r from-sky-50 to-blue-200">
          <div className="flex overflow-hidden w-full h-full bg-gradient-to-l from-neutral-50 to-blue-100 rounded-md shadow-sm border-2 border-neutral-100 ">
              <div className=" flex flex-col justify-center gap-10 px-10 py-5 w-1/2 max-sm-hidden ">
                 <h1 className="text-6xl text-blue-500 font-bold ">CarSend</h1>
                 <h3 className='text-4xl max-w-xl text-dark font-semibold '>Ton monde automobile, réuni sur une seule plateforme.</h3>
                 <p className="text-md text-neutral-500">Simple, rapide et fiable, elle vous permet de réaliser tous vos projets automobiles en toute confiance, avec une expérience moderne adaptée à vos besoins.</p>
              </div>
              <div className="w-1/2 p-5 ">

                 <div className=" h-full rounded-lg shadow-xl bg-white py-10 px-10">

                    <h3 className='font-bold text-xl mb-2'>Bienvenue</h3>
                    <p className='text-neutral-500'>Inscris toi pour acceder a la plaform</p>

                    <form  className='mt-10'>

                     {/* nom et prenom */}

                        <div className="grid grid-cols-2 gap-3">

                           <div className="input flex flex-col ">
                              <label className="text-sm"  htmlFor="prenom">Prenom</label>
                               <div className="shadow-sm mt-2 group rounded-xl px-3 overflow-hidden  flex items-center  border-2 border-neutral-200 focus-within:border-blue-300 focus-within:ring focus-within:ring-blue-200">
                                    <CiUser className="text-xl text-neutral-800  group-focus-within:text-blue-500" />                      

                                    <input 
                                    className="py-2 text-sm px-3 w-full focus:outline-none"
                                    type="text" 
                                    placeholder="prenom"
                                    />
                                 </div>                     
                           </div>
                           <div className="input flex flex-col ">
                              <label className="text-sm" htmlFor="nom">Nom</label>
                               <div className="shadow-sm mt-2 group rounded-xl px-3 overflow-hidden  flex items-center   border-2 border-neutral-200 focus-within:border-blue-300 focus-within:ring focus-within:ring-blue-200">
                                    <CiUser className="text-xl text-neutral-800  group-focus-within:text-blue-500" />                      

                                    <input 
                                    className="py-2 text-sm px-3 w-full focus:outline-none"
                                    type="text" 
                                    placeholder="nom"
                                    />
                                 </div>                     
                           </div>

                        </div>
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

                        
                     {/* mots de passe et confirm mots de passe*/}

                        <div className="grid grid-cols-2 gap-3 mt-5">

                           <div className="input flex flex-col ">
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
                           <div className="input flex flex-col ">
                              <label className="text-sm" htmlFor="confirmpassword">Confirmé mots de passe</label>
                               <div className="shadow-sm mt-2 group rounded-xl px-3 overflow-hidden  flex items-center   border-2 border-neutral-200 focus-within:border-blue-300 focus-within:ring focus-within:ring-blue-200">
                                    <MdPassword  className="text-xl text-neutral-800  group-focus-within:text-blue-500" />                      

                                    <input 
                                    className="py-2 text-sm px-3 w-full focus:outline-none"
                                    type="password" 
                                    placeholder="xxxxxx"
                                    />
                                 </div>                     
                           </div>

                        </div>
                         
                         <button className="w-full text-sm text-white py-2 mt-10 text-center bg-blue-500 rounded-xl shadow-sm hover:bg-blue-600">
                            Inscription
                         </button>
            
 
                    </form>
                   
                 </div>
                
              </div>
          </div>
       </div>
   
  )
}

export default Register
