import React from 'react'
import Navbar from './../../composants/navbar/Navbar';
import Hero from './../../composants/Hero/Hero';
import Conteneur from './../../composants/Conteneur';

const Home = () => {
  return (
    <div className="w-full h-screen">
       <Navbar/>
       <Hero/>
       <Conteneur>
          <div className="">

          </div>
       </Conteneur>
    </div>
  )
}

export default Home
