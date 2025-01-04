import React from 'react'
import Services from '../Services/Services';
import Value from '../Value/Value';
import Contact from '../Contact/Contact';
import Hero from '../Hero/Hero';
import Getstarted from '../Getstarted/Getstarted';

const Home = () => {
  return (
    <>
    {/* <div className='App'>
    <div>
    <div className='white-gradient'/>
    <Hero/>
    </div>
    </div> */}
      <Services/>
      <Value/>
      <Contact/>
      <Getstarted/>
    </>
  )
}

export default Home