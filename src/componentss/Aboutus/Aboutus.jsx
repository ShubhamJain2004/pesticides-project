import React from "react";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <div className="aboutus-container">
      <div className="container mx-auto px-4 py-8 mt-4">
        <h1 className="aboutus-heading">
          ABOUT
          <span className="text-black"> US</span>
        </h1>

        <div className="aboutus-content flex flex-col items-center mb-12 md:flex-row">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="https://img.freepik.com/free-photo/people-disinfecting-together-dangerous-area_23-2148848569.jpg"
              alt="AboutUsImage"
              className="aboutus-image"
              height="400"
              width="600"
            />
          </div>

          {/* text content */}
          <div className="md:w-1/2 md:pl-8 mt-5">
            <p className="aboutus-content-text">
              Welcome to PestControlPro, your reliable partner in managing pest
              issues effectively and responsibly. At PestControlPro, we
              comprehend the challenges homeowners encounter when dealing with
              pest infestations and maintaining a safe environment.
            </p>

            <p className="aboutus-content-text">
              PestControlPro is dedicated to excellence in pest management
              solutions. We continuously innovate to enhance our services,
              leveraging advanced techniques to ensure effective and
              eco-friendly pest control. Whether you're addressing your first
              infestation or maintaining long-term protection, PestControlPro is
              here to assist you every step of the way.
            </p>

            <h2 className="aboutus-vision">Our Vision</h2>
            <p>
              Our vision at PestControlPro is to create a pest-free environment
              for every client. We aim to bridge the gap between effective pest
              solutions and your peace of mind, ensuring you can enjoy a safe
              and comfortable space, whenever you need it.
            </p>
          </div>
        </div>

        <h2 className="aboutus-choose">
          WHY
          <span className="text-black"> CHOOSE US</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="aboutus-feature">
            <h4 className="text-lg font-bold mb-2 text-center">EFFICIENCY:</h4>
            <p>
              Effortless pest control solutions tailored to fit seamlessly into
              your busy lifestyle.
            </p>
          </div>

          <div
            className="aboutus-feature border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] 
          hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer"
          >
            <h4 className="text-lg font-bold mb-2 text-center">CONVENIENCE:</h4>
            <p>
              Access to a network of trusted pest control experts in your area.
            </p>
          </div>

          <div
            className="aboutus-feature border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary 
          hover:text-white transition-all duration-300 text-gray-600 cursor-pointer"
          >
            <h4 className="text-lg font-bold mb-2 text-center">
              PERSONALIZATION:
            </h4>
            <p>
              Customized solutions and proactive reminders to help you maintain
              a pest-free environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
