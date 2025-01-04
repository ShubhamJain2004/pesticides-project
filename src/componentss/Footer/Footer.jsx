import React from 'react'
import './Footer.css';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";




const Footer = () => {
  return (
    <>
    <section className="f-wrapper">
        <div className="paddings innerwidth flexCenter f-container">
            {/*left-side*/}
            <div className="flexColstart f-left">
                <img src='./flogo.png' alt='' width={120}/>
                <span className='SecondaryText'>
                    Our Vision is to make all People <br/>
                    the best place to live for them.
                </span>
            </div>
            <div className='f-middle flexColstart'>
                <span>Our Social Media Handles</span>
                <span >
                <FaSquareInstagram size={35} style={{margin:"0 1.3rem"}}/> 
                <FaFacebookSquare size={35} style={{margin:"0 1.2rem 0 0"}}/>
                <FaSquareTwitter size={35} />
</span>
                

            </div>

            {/*right-side*/}
            <div className="flexColstart f-right">
                <span className='primaryText'>Information</span>
                <span className='SecondaryText'>Indira Nagar,Nashik</span>

                <div className='flexCenter f-menu'>
                    <a href='Home'>Home</a>
                    <a href='Aboutus'>About Us</a>
                    <a href='Services'>Services</a>
                    <a href='Contact'>Contact</a>
                    

                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer