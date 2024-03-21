import React from "react";
import "./Hero.css";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from './../SearchBar/SearchBar';

const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <div className="orange-circle" />
              <motion.h1
                initial={{ y: "2rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, type: "spring" }}
              >
                Discover
                <br /> most suitable <br />
                properties
              </motion.h1>
            </div>

            <div className="flexColStart hero-des">
              <span>
                Discover your dream home with our expertly curated listings.
              </span>
              <span>
                Find your perfect sanctuary amidst a sea of possibilities,
                <br /> where comfort meets luxury.
              </span>
            </div>

           <SearchBar/>

            <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={8800} end={9000} duration={4} />+
                </span>
                <span className="secondaryText">Premium products</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp start={1950} end={2000} duration={4} />+
                </span>
                <span className="secondaryText">Happy customers</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp end={28} />+
                </span>
                <span className="secondaryText">Awards</span>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="flexCenter hero-right paddings">
            <motion.div
            initial={{x:"7rem" ,opacity:0}} 
            animate={{x:0 ,opacity:1}}
            transition={{duration:2 ,type:"spring"}}
            className="image-container">
              <img
                src="https://plus.unsplash.com/premium_photo-1676625176020-3bbb1c0adea1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGJ1aWxkaW5nfGVufDB8fDB8fHww"
                alt="bigBanner"
              />
              
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
