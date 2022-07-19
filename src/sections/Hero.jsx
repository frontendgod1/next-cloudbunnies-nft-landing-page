import React from 'react'
import Navbar from '../layout/Navbar'

function Hero() {
  return (
    <div id="home" className="lg:h-screen h-screen relative wbg-hero_mobile lg:bg-hero bg-no-repeat relative  lg:bg-bottom bg-center  bg-cover">
      <Navbar />
      <img src="/img/leftB.png"className="w-52 left-[44%] hidden lg:block top-[20%] absolute" />
      <img src="/img/centerB.png" className="w-52 left-[15%] hidden p-4 lg:block top-[45%] absolute object-fit"  />
      <img src="/img/rightB.png" className="w-52 right-[15%] lg:block p-4 hidden top-[45%] absolute object-fit" />
      {/* mobile */}
      <img src="/img/center.png"  className="w-40 left-[32%] lg:hidden block top-[34%] absolute" />
      <img src="/img/small_left.png" className="w-40 left-0 lg:hidden block top-[50%] absolute"   />
      <img src="/img/small_right.png" className="w-40 right-0 block lg:hidden top-[50%] absolute"  />
      <h1  data-aos='fade-left'  className="text-4xl  font-irish justify-center  absolute top-[25%] lg:top-276 left-[3%] lg:left-[20%]  text-transparent lg:my-12 lg:text-7xl bg-clip-text font-extrabold bg-gradient-to-b from-[#de5e82] to-[#4577d4] flex items-center"><img src="/img/CLOUDBUNNIES.png" /></h1>



    </div>
  )
}

export default Hero