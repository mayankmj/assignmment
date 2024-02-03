import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import 'firebase/auth';
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import {auth} from '../Pages/firebase'
const EmailAddressInput = () => {
  const googleAuth = () =>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <form className="mx-auto p-5 flex flex-col gap-6">
      <div className="text-17xl leading-10 font-bold text-black">
        Sign In
      </div>
      <div className="text-abovebase text-black leading-6">
     
        Sign in to your account
      </div>
      <div className="flex flex-row gap-2">
        <div className="flex items-center bg-white px-2 hover:cursor-pointer" onClick={googleAuth}>
          <FcGoogle className="h-6 w-6"/>
          <p className="text-[#858585] text-base ml-2">Sign in with Google</p>
        </div>
        <div className="flex items-center bg-white px-2 hover:cursor-pointer">
          <IoLogoApple className="h-6 w-6 text-black"/>
          <p className="text-[#858585] ml-2 text-base">Sign in with Apple</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-abovebase font-lato text-[#000000] leading-7 font-normal">
          Email address
        </div>
        <input
          className="border-none bg-background text-abovebase p-3 rounded"
          placeholder="johndoe@gmail.com"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-base font-lato text-black leading-7">
          Password
        </div>
        <input
          className="border-none bg-field-color-darker text-abovebase p-3 rounded"
          placeholder="••••••••"
          type="password"
        />
      </div>
      <div className="text-base font-lato text-[#346BD4] cursor-pointer">
        Forgot password?
      </div>
      <button
        className="border-none py-2 text-3xl bg-mediumslateblue text-white p-2 rounded cursor-pointer"
      >
        Sign In
      </button>
      <div className="text-base text-center">
        <span className="text-secondary-text">Don't have an account?</span>
        <span className="text-link cursor-pointer"> Register here</span>
      </div>
    </form>
  );
};

export default EmailAddressInput;
