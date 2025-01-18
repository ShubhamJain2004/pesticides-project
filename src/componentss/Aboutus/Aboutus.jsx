import React from "react";

const Aboutus = () => {
  return (
    <>
      <div className="bg-white text-gray-800">
        <div className="container mx-auto px-4 py-8 mt-4">
          <h1 className="text-center text-3xl font-bold mb-8">
            ABOUT
            <span className="text-black"> US</span>
          </h1>

          <div className="flex flex-col items-center mb-12 md:flex-row">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img
                src="/aboutus.jpg"
                alt="AboutUsImage"
                className="w-full h-auto rounded-lg shadow-md"
                height="400"
                width="600"
              />
            </div>

            {/* text content */}
            <div className="md:w-1/2 md:pl-8">
              <p className="mb-4">
                Welcome to PestControlPro, your reliable partner in managing
                pest issues effectively and responsibly. At PestControlPro, we
                comprehend the challenges homeowners encounter when dealing with
                pest infestations and maintaining a safe environment.
              </p>

              <p className="mb-4">
                PestControlPro is dedicated to excellence in pest management
                solutions. We continuously innovate to enhance our services,
                leveraging advanced techniques to ensure effective and
                eco-friendly pest control. Whether you're addressing your first
                infestation or maintaining long-term protection, PestControlPro
                is here to assist you every step of the way.
              </p>

              <h2 className="text-xl font-bold mb-2">Our Vision</h2>
              <p>
                Our vision at PestControlPro is to create a pest-free
                environment for every client. We aim to bridge the gap between
                effective pest solutions and your peace of mind, ensuring you
                can enjoy a safe and comfortable space, whenever you need it.
              </p>
            </div>
          </div>

          <h2 className="text-center text-2xl font-bold mb-8">
            WHY
            <span className="text-black"> CHOOSE US</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-md">
              <h4 className="text-lg font-bold mb-2 text-center">EFFICIENCY:</h4>
              <p>
                Effortless pest control solutions tailored to fit seamlessly into your busy lifestyle.
              </p>
            </div>

            <div className="p-6 border rounded-lg shadow-md hover:bg-blue-500 hover:text-white">
              <h4 className="text-lg font-bold mb-2 text-center">CONVENIENCE:</h4>
              <p>
                Access to a network of trusted pest control experts in your area.
              </p>
            </div>

            <div className="p-6 border rounded-lg shadow-md">
              <h4 className="text-lg font-bold mb-2 text-center">PERSONALIZATION:</h4>
              <p>
                Customized solutions and proactive reminders to help you maintain a pest-free environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
