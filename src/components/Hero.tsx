import React from 'react';
import Navebar from './Navebar';

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/Image.jpg)] bg-cover'
     style={{backgroundSize: "25%", backgroundPosition: "left 120px top 100px"}}>
      <Navebar /> 
      <div className='container grid lg:grid-cols-2 h-[colc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p>I'm</p>
            <p>Khalida</p>
            <p>Sheikh</p>
          </div>
        </div>
      </div>
    </div>

)
};

export default Hero;
