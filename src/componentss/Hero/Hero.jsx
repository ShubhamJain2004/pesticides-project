import React from 'react'
import './Hero.css';
import CountUp from 'react-countup';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerwidth flexCenter hero-container ">

             {/*left-side*/}
            <div className="flexColstart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <motion.h1 
                    initial={{y: "2rem",opacity: 0}}
                    animate={{y: 0,opacity:1}}
                    transition = {{
                        duration:2,
                        type:"spring"
                    }}>Find Trusted Service </motion.h1>
                    <motion.h2
                    initial={{y: "2rem",opacity: 0}}
                    animate={{y: 0,opacity:1}}
                    transition = {{
                        duration:4,
                        type:"spring"
                    }}>Professionals Near <br/>You</motion.h2>
                </div>

                <div className="flexColstart hero-descp">
                    <span className='SecondaryText'>Connect with verified service providers for all </span>
                    <span className='SecondaryText'>your residential and commercial needs</span>
                </div>

                <button className="button" >
                <Link to="/MainServices" style={{textDecoration:"none"}}>
                <div>Get Started</div>
                </Link>
                </button>

            <div className="flexCenter stats">
                <div className="flexColCenter stat">
                    <span>
                        <CountUp start={8800} end={9000} duration={4}/>
                        <span>+</span>
                    </span>
                    <span className='SecondaryText'>Premium Products</span>
                </div>
                <div className="flexColCenter stat">
                    <span>
                        <CountUp start={1950} end={1800} duration={4}/>
                        <span>+</span>
                        </span>
                        <span className='SecondaryText'>Happy Customers</span>
                </div>
                <div className="flexColCenter stat">
                    <span>
                        <CountUp  end={50} />
                        <span>+</span>
                        </span>
                        <span className='SecondaryText'>Award Winning</span>
                </div>
            </div>
                

                


            </div>



            {/*right-side*/}
            <div className="flexCenter hero-right">
                <motion.div
                initial={{x: "7rem",opacity: 0}}
                animate={{x: 0,opacity:1}}
                transition = {{
                    duration:4,
                    type:"spring"
                }} className="image-container">
                    <img src='./hero.jpg'/>
                </motion.div>

            </div>

        </div>
    </section>

  )
}

export default Hero