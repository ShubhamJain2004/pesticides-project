import React from 'react'
import { MdCall } from 'react-icons/md';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';
import './Contact.css';


const Contact = () => {
  return (
    <>
    <section className="c-wrapper">
        <div className="paddings innerwidth flexCenter c-container">
            {/*left-side*/}
            <div className=" flexColstart c-left">
                <span className='Redtext'>Our Contacts</span>
                <span className='primaryText'>Easy to Contact us</span>
                

                <div className="flexColstart contactModes">
                    {/*first-row*/}
                    <div className="flexstart row">
                        <div className="flexColstart mode">
                            <div className='flexStart'>
                            <div className="flexCenter icon">
                                <MdCall size={25}/>
                            </div>
                            <div className="flexColstart detail">
                                <span className='primaryText'>Call</span>
                                <span className='SecondaryText'>021 345 678 900</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Call Now</div>
                    </div>

                    {/*second*/}
                    <div className="flexColstart mode">
                            <div className='flexStart'>
                            <div className="flexCenter icon">
                                <HiChatBubbleBottomCenter size={25}/>
                            </div>
                            <div className="flexColstart detail">
                                <span className='primaryText'>Message</span>
                                <span className='SecondaryText'>021 345 678 900</span> 
                            </div>
                        </div>
                        <div className="flexCenter button">Message Now</div>
                    </div>
                </div>
            </div>
        </div>

            {/*right-side*/}

            <div className="c-right">
                <div className="image-container" 
                style={{ height: "30rem", width: "30rem" }}>
                <img src='contact.jpg' alt='' />

                </div>
                
            </div>
        </div>
    </section>
    <hr/>
    </>
  )
}

export default Contact