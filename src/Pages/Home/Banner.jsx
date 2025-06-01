import React from 'react';
import {  motion } from 'motion/react';
import group1 from '../../assets/group-1.jpg'
import group2 from '../../assets/group-2.jpg'

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <motion.img
            src={group1}
            animate={{y: [0, -100, 0]}}
            transition={{duration: 6, repeat: Infinity}}
            className="max-w-sm shadow-2xl rounded-e-2xl rounded-t-2xl border-e-6 border-t-6"
          />
          <motion.img
            src={group2}
            animate={{x: [100, 50, 100]}}
            transition={{duration: 6,delay:2, repeat: Infinity}}
            className="max-w-sm shadow-2xl rounded-s-2xl rounded-b-2xl border-s-6 border-b-6"
          />
          <div
          className='md:w-1/2'>
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale:1, duration: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="text-5xl font-bold">Remote Jobs for you!</motion.h1>
            <motion.p
              animate={
                {
                  color: ['#ff5733', '#fffc33', '#6eff33', '#33ffdd', '#3358ff', '#ff33ff', '#ff333f'],
                  transition: { duration: 6, repeat: Infinity }
                }
              }
              className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </motion.p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Banner;