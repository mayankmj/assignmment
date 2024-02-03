import React from 'react';

// import FrameSignIn from "../Components/FrameSignIn";
// import FrameSignIn from '../Components/FrameSignIn';
import EmailAddressInput from "../Components/EmailAddressInput";
import twitter from "../Assessts/Vector (1).png"
import github from "../Assessts/Vector.png"
import linkedin from "../Assessts/carbon_logo-discord.png"
import discord from "../Assessts/carbon_logo-linkedin.png"
import git from "../Assessts/mobile/Vector (2).png"
import linkedinn from "../Assessts/mobile/Vector (3).png"
import discords from "../Assessts/mobile/Vector (4).png"
import twitters from "../Assessts/mobile/carbon_logo-discord (1).png"
import logo from "../Assessts/logo.png"
import './Login.css'
const Login = () => {
     const imageSources = [github, twitter, discord, linkedin];
     const imageSource = [git, twitters, linkedinn, discords];
     const linkUrls = ['https://github.com/mayankmj', 'https://twitter.com/MayankJohari3', 'https://www.linkedin.com/in/mayank-johari-52aa05202/', 'https://discord.com/.mayank_mj'];

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 min-h-screen main-div'>
  <div className='hidden md:flex flex-col justify-center bg-rega-blue left-div'>
    <div>
      <img src={logo} alt='no-image' className='p-5 min-w-8'/>
    </div>
    <div className='text-white mt-auto mb-auto text-center items-center font-bold text-40xl'>
      BASE
    </div>
    <div className='flex lg:items-center lg:justify-center mb-7 gap-2 hover:cursor-pointer'>
      {imageSources.map((src, index) => (
        <a key={index} href={linkUrls[index]} target="_blank" rel="noopener noreferrer">
          <img src={src} alt={`image-${index}`} className='mx-2 max-w-10 max-h-10 cursor-pointer' />
       </a>
      ))}
    </div>
  </div>
  <div className='md:hidden bg-rega-blue max-h-28'>
      <div className='flex flex-row gap-3 ml-4 '>
      <img src={logo} alt='logo' className='mt-auto mb-auto min-w-12 min-h-12'/>
        <p className='font-semibold text-17xl text-white'>Base</p>
      </div> 
  </div>
  <div className='flex md:items-center justify-center bg-[#F8FAFF] right-div'>
    <EmailAddressInput />
  </div>
  <div className='md:hidden flex items-center justify-center mb-2 gap-2 hover:cursor-pointer'>
      {imageSource.map((src, index) => (
        <a key={index} href={linkUrls[index]} target="_blank" rel="noopener noreferrer">
          <img src={src} alt={`image-${index}`} className='mx-2 max-w-10 max-h-10 cursor-pointer' />
       </a>
      ))}
    </div>
</div>
  );
};

export default Login;
