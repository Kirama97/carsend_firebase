import React, { useState } from 'react'
import {auth} from "../../config/firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"



const Register = () => {

  const [email ,setEmail] = useState("")
  const [password ,setPassword] = useState("")

   const inscrir = async () => {
      
     if(!email || !password ) return ;
    await createUserWithEmailAndPassword(auth , email , password)

   }


  return (
  
       <div className="max-w-xl mx-auto p-4 rounded-lg bg-black/40 text-black ">
       <h1 className='text-center text2xl font-bold mb-5'>Creer un compte</h1>
        <form action="" className='flex flex-col gap-4'>
          <input type="email" className='px-3 py-1 text-md ' placeholder="email..."
           value={email}
           onChange={(e) => setEmail(e.target.value)}
          
          />
          <input type="password" className='px-3 py-1 text-md ' placeholder="mots de passe..."
           value={password}
           onChange={(e) => setPassword(e.target.value)}
          
          />
          <button className='bg-black text-white' onClick={inscrir}  type="submit" >s'inscrire</button>

        </form>
    </div>
   
  )
}

export default Register
