import React, { useRef, useState } from "react";

const Login = () => {
    const [isSignIn,setIsSignIn]=useState(false);
    const [errorMessage,setErrorMessage]=useState(null);
    
    const switchBetweenSignInSignUp=()=>{
        setIsSignIn(!isSignIn);
    }

    const name=useRef();
    const email=useRef();
    const password=useRef();
    
    
  return (
    <div>
      <div className="absolute w-full h-[750px] bg-black opacity-50"></div>
      <div>
        <img
          className="absolute w-48 ]"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Logo"
        />
      </div>
      <div>
        <img
          className="object-cover w-full h-[750px]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <div className="flex items-center justify-center w-full">
        <form className="absolute flex flex-col gap-5 px-16 py-20 text-white bg-black opacity-80 top-28">
          <p className="mb-5 text-3xl font-semibold">{isSignIn?"Sign In":"Sign Up"}</p>
          {!isSignIn && <input type="text" placeholder="Your Name" ref={name} className="px-4 py-3 rounded-md w-80"/>}
          <input type="email" placeholder="Email" ref={email} className="px-4 py-3 text-black rounded-md w-80"/>
          <input type="password" placeholder="Password" ref={password} className="px-4 py-3 text-black rounded-md w-80"/>
          <p>{errorMessage}</p>
          <button className="py-3 text-lg font-medium bg-red-600 rounded-md">{isSignIn?"Sign In":"Sign Up"}</button>
          <p className="text-slate-500" onClick={switchBetweenSignInSignUp}>{isSignIn?"New to Netflix? ":"Already have account? "}<span className="text-white cursor-pointer hover:underline">{isSignIn?"Sign up now":"Sign In"}</span></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
