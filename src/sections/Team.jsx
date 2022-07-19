import React from 'react'
import TeamOne from '../components/Team'

function Team() {
  return (
    <div id="team" className="">
        <div className="md:bg-team h-full py-12 bg-cover bg-top  bg-no-repeat" style={{ boxShadow: '0px -20px 30px 10px #b1c5f8 inset'}}>
            <h1 className="text-center font-irish text-2xl tracking-wide mb-12 font-semibold text-white uppercase">Meet the team</h1>
            <div className='md:max-w-[75%] mx-auto w-full flex md:flex-row flex-col items-center md:space-x-4 justify-between'>
                <TeamOne img="/img/team1.png" background='/img/teamBg2.png' name="Chief Bunny" desc="Founder & Marketing" />
                <TeamOne img="/img/team2.png" background='/img/teamBg2.png' name="Astro Bunny" desc="Admin & Community engagement specialist" />
                <TeamOne img="/img/logo.png" background='/img/teamBg3.png' name="Ninja Bun" desc="Marketing & Socials" />
            </div>
        </div>
    </div>
  )
}

export default Team