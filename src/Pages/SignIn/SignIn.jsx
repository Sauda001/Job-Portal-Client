import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import animation from '../../assets/lottti-files/signIn.json';
import Lottie from 'lottie-react';

const SignIn = () => {
    const { signInUser } = use(AuthContext)
    
        const handleSignIn = e =>{
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const pass = form.password.value;
            console.log(email, pass);
    
            //create user 
            signInUser(email, pass)
            .then(result =>
                console.log(result))
                .catch((error)=>{
                    console.log(error)})
        }
    
        return (
            <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-1/2">
          <Lottie animationData={animation} loop={true} />
        </div>
        <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl w-full">
          <div className="card-body">
            <h1 className="text-2xl font-bold">Sign In now!</h1>
            <form onSubmit={handleSignIn}>
              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
              <button className="btn btn-neutral mt-4">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
        );
    };

export default SignIn;