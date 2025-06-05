import React, { use } from 'react';
import animation from '../../assets/lottti-files/register.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../../Context/AuthContext';
import SocialLogin from '../Shared/SocialLogin';
import { FaEnvelope, FaLock, FaUserPlus } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Register = () => {

  const { createUser } = use(AuthContext)

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    //create user 
    createUser(email, pass)
      .then(result =>
        console.log(result))
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">

        <motion.div
          className="card bg-base-100 max-w-screen shrink-0 shadow-2xl w-full"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
        >
          <div className="card-body">
            <h1 className="text-3xl font-extrabold text-primary flex items-center text-center gap-2 mb-4">
              <FaUserPlus className="text-accent" /> Register
              <motion.div
                className="text-center lg:text-left w-[80px] lg:w-1/3"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, type: "spring" }}
              >
                <Lottie animationData={animation} loop={true} />
              </motion.div>
            </h1>
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="label font-semibold flex items-center gap-2">
                  <FaEnvelope className="text-blue-600" /> Email
                </label>
                <input
                  type="email"
                  name='email'
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="label font-semibold flex items-center gap-2">
                  <FaLock className="text-purple-600" /> Password
                </label>
                <input
                  type="password"
                  name='password'
                  className="input input-bordered w-full"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 4px 24px #6366f1" }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="btn btn-primary btn-block mt-4 flex items-center gap-2 justify-center"
              >
                <FaUserPlus /> Register
              </motion.button>
            </form>
            <SocialLogin />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;