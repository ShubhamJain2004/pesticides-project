import React from "react";
import "./Value.css";
import { IoSearch } from "react-icons/io5";


import { MdOutlineVerified } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { MdOutlinePersonAddAlt } from "react-icons/md";


const Value = () => {
  return (
    <>
    <section className="v-wrapper">
      <div className="paddings innerwidth flexCenter v-container">
        {/*Left-Side*/}
        <div className="v-left">
          <div
            className="image-container"
            style={{ height: "30rem", width: "27rem" }}
          >
            <img src="./value.jpg" />
          </div>
        </div>

        {/*Right-Side*/}

        <div className="flexColstart v-right">
          <span className="Redtext">Why Choose Us</span>
          <span className="primaryText">Value We Give to You</span>
          <div className="flexColstart v-mode">
            <div className="flexStart">
              <div className="flexCenter v-icon">
              <IoSearch size={25} /> 
              </div>
              <div className="flexColstart value1">
                <span className="">Easy to Find Services</span>
                <span className="SecondaryText">
                  {" "}
                  Quick and Easy search for the services you need in your area.
                </span>
              </div>
            </div>
          </div>

          <div className="flexColstart v-mode">
            <div className="flexStart">
              <div className="flexCenter v-icon">
                <MdOutlineVerified size={25} />
              </div>
              <div className="flexColstart value1">
                <span>Verified Professionals</span>
                <span className="SecondaryText">
                  {" "}
                  All service Providers are verified and approved by our team.
                </span>
              </div>
            </div>
          </div>

          <div className="flexColstart v-mode">
            <div className="flexStart">
              <div className="flexCenter v-icon">
                <FaRegStar size={25} />
              </div>
              <div className="flexColstart value1">
                <span>Quality Service</span>
                <span className="SecondaryText">
                  Rated and reviewed by real customers.
                </span>
              </div>
            </div>
          </div>

          <div className="flexColstart v-mode">
            <div className="flexStart">
              <div className="flexCenter v-icon">
              <MdOutlinePersonAddAlt size={25} />
              </div>
              <div className="flexColstart value1">
                <span>Dedicated Support </span>
                <span className="SecondaryText">
                  24/7 customer support to help you with any issues
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr/>
    </>
  );
};

export default Value;
