import React, { useState } from 'react'
import {auth , db} from "../../config/firebase-config"
import {createUserWithEmailAndPassword} from "firebase/auth"
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import {NavLink ,useNavigate} from 'react-router-dom'


import { CiUser } from "react-icons/ci";
import { MdOutlineAttachEmail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import { motion } from "framer-motion"
import { PiHandWavingFill } from "react-icons/pi";
import { FaCar } from "react-icons/fa";
import { IoReturnDownBack } from 'react-icons/io5';
import { toast } from 'react-toastify';


const Register = () => {

  const [prenom , setPrenom] = useState("")
  const [nom , setNom] = useState("")
  const [email ,setEmail] = useState("")
  const [password ,setPassword] = useState("")
  const [confirmPassword ,setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();


   const handleRegister = async (e) => {
      
   e.preventDefault();
   setLoading(true);

   if(!prenom || !nom || !email || !password || !confirmPassword) {
      setLoading(false);
      toast.error('Veuillez remplir tous les champs');
      return;
   }

   if(password.length <= 5){
      setLoading(false);
      toast.error("Au minimum 6 caractéres pour le mots de passe");
      return;
   }

   if(password !== confirmPassword) {
      setLoading(false);
      toast.error("Les deux mots de passe ne correspondent pas");
      return;
   }

     try {
       const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
       );

       await setDoc(doc(db, "users", userCredential.user.uid), {
          prenom,
          nom,
          adresse : "",
          profil : "",
          email,
          role: "client",
          createdAt: serverTimestamp(),
       });
       
       toast.success("Inscription réussie ✔️")
       navigate("/connexion");
       console.log("utilisateur créé :", userCredential.user);
     } catch(error) {
       console.log(error.code, error.message);
       toast.error(error.message);
     } finally {
        setLoading(false);
     }
   

   }


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
                              <h3 className='font-bold text-2xl '>Bienvenue </h3>
                              <PiHandWavingFill className="hidden sm:flex animate-wave" /> 
                              </div>
                        <p className='text-neutral-500'>Inscrivez-vous pour accéder à la plateforme</p>

                     <form onSubmit={handleRegister}  className='mt-10'>

                        {/* nom et prenom */}

                           <div className="grid grid-cols-2 gap-3">

                              <div className="input flex flex-col ">
                                 <label className="text-sm"  htmlFor="prenom">Prenom</label>
                                 <div className="shadow-sm mt-2 group rounded-xl px-3 overflow-hidden  flex items-center  border-2 border-neutral-200 focus-within:border-blue-300 focus-within:ring focus-within:ring-blue-200">
                                       <CiUser className="text-xl text-neutral-800  group-focus-within:text-blue-500" />                      

                                       <input 
                                       id="prenom"
                                       className="py-2 text-sm px-3 w-full focus:outline-none"
                                       type="text" 
                                       placeholder="prenom"
                                       value={prenom}
                                       onChange={(e) => setPrenom(e.target.value)}
                                       required
                                       />
                                    </div>                     
                              </div>
                              <div className="input flex flex-col ">
                                 <label className="text-sm" htmlFor="nom">Nom</label>
                                 <div className="shadow-sm mt-2 group rounded-xl px-3 overflow-hidden  flex items-center   border-2 border-neutral-200 focus-within:border-blue-300 focus-within:ring focus-within:ring-blue-200">
                                       <CiUser className="text-xl text-neutral-800  group-focus-within:text-blue-500" />                      

                                       <input 
                                       id="nom"
                                       className="py-2 text-sm px-3 w-full focus:outline-none"
                                       type="text" 
                                       placeholder="nom"
                                       value={nom}
                                       onChange={(e) => setNom(e.target.value)}
                                       required
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
                                       id="email"
                                       className="py-2 text-sm px-3 w-full focus:outline-none"
                                       type="email" 
                                       placeholder="toi@exemple.com"
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       required
                                       />
                                 </div>                     
                           </div>

                           
                        {/* mots de passe et confirm mots de passe*/}

                           <div className="">

                              <div className="grid grid-cols-2 gap-3 mt-5 ">

                                 <div className="input flex flex-col ">
                                    <label className="text-sm"  htmlFor="password">Mots de Passe</label>
                                    <div className="shadow-sm mt-2 group rounded-xl px-3 overflow-hidden  flex items-center  border-2 border-neutral-200 focus-within:border-blue-300 focus-within:ring focus-within:ring-blue-200">
                                          <MdPassword  className="text-xl text-neutral-800  group-focus-within:text-blue-500" />                      

                                          <input 
                                          id="password"
                                          className="py-2 text-sm px-3 w-full focus:outline-none"
                                          type={showPassword ? "text" : "password"} 
                                          placeholder="xxxxxxx"
                                          value={password}
                                          onChange={(e) => setPassword(e.target.value)}
                                          required
                                          />
                                       </div>     
                                                   
                                 </div>
                                 <div className="input flex flex-col ">
                                    <label className="confirmepassword text-sm" htmlFor="confirmpassword">Confirmé mots de passe</label>
                                    <div className="shadow-sm mt-2 group rounded-xl px-3 overflow-hidden  flex items-center   border-2 border-neutral-200 focus-within:border-blue-300 focus-within:ring focus-within:ring-blue-200">
                                          <MdPassword  className="text-xl text-neutral-800  group-focus-within:text-blue-500" />                      

                                          <input 
                                          id="confirmpassword"
                                          className="py-2 text-sm px-3 w-full focus:outline-none"
                                          type={showPassword ? "text" : "password"} 
                                          placeholder="xxxxxx"
                                             value={confirmPassword}
                                          onChange={(e) => setConfirmPassword(e.target.value)}
                                          required
                                          />
                                       </div>                     
                                 </div>

                              </div>
                           
                              <div className="flex items-center w-full gap-3 my-3 ml-3">
                                        <input 
                                        type="checkbox"        
                                        onClick={() => setShowPassword(!showPassword)}
                                         />
                                      <p
                                      
                                       className="text-sm text-pColor cursor-pointer  select-none"
                                       >
                                       {showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                                       </p>

                                 </div> 
                           </div>
                          
                           <button type='submit' className="w-full text-sm  text-white py-2 mt-10 text-center bg-primary rounded-xl shadow-sm transition-all duration-200 hover:bg-textHover ">
                              {loading ? "Création..." : "S'inscrire"}
                           </button>
                           <p className='text-neutral-600 mt-4 text-center' > Déjà un compte ? <NavLink to="/connexion" className="text-primary hover:textHover">connecte-toi</NavLink> </p>
               
   
                     </form>
                     
                  </motion.div>
                
              </div>
          </div>
       </div>
   
  )
}

export default Register
