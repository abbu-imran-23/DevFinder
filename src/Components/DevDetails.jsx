import React from 'react'
import { LocationIcon, WebsiteIcon, TwitterIcon, CompanyIcon } from '../Utils/Icons'

const DevDetails = ({devInfo}) => {

  const {avatar_url, name, created_at, login, bio, 
         public_repos, followers, following, location,
          website, twitter_username, company} = devInfo;

  return (
    <div className='w-[350px] md:w-[680px] border-2 mt-1 gap-3 items-center md:items-start flex flex-col md:flex-row rounded-lg p-3'>
      
      {/* Left */}
      <div className='w-[120px] h-[120px] rounded-[50%] bg-profileImage bg-cover mt-1 ml-1'>
        <img src={avatar_url} alt="" className='rounded-[50%]' />
      </div>

      {/* Right */}
      <div className='w-[350px] md:w-[500px] flex flex-col items-center md:items-start gap-3 p-1'>
        
        {/* Name, Joining date and Username */}
        <div className='w-[320px] md:w-[500px] flex flex-col md:block justify-center items-center md:items-start'>
          <div className='flex justify-between items-center'>
            <h2 className='text-3xl mx-auto md:mx-0 font-semibold font-mono'>{name}</h2>
            <span className='text-[1.125rem] mt-1 mr-0 md:mr-4 font-light font-mono hidden md:block'>{created_at}</span>
          </div>
          <span className='text-[1.1rem] text-center md:text-start font-light font-mono'>@{login}</span>
        </div>

        {/* Bio Section */}
        <div className='w-[250px] md:[500px]'>
          <p className='text-[1.125rem] w-[250px] md:w-[470px] text-center font-light font-mono'>
            {bio}
          </p>
        </div>

        {/* Stats Section */}
        <div className='w-[250px] md:w-[500px] py-2 md:py-3 gap-3 md:gap-0 my-1 bg-[#e1e4df] p-1 rounded-md flex flex-col md:flex-row justify-evenly items-center'>
          {/* Repos */}
          <div className='flex flex-col gap-1 items-center'>
            <span className='text-[1.125rem] font-light font-mono'>Repos</span>
            <span className='text-[1.125rem] font-semibold font-mono'>{public_repos}</span>
          </div>
          {/* Followers */}
          <div className='flex flex-col gap-1 items-center'>
            <span className='text-[1.125rem] font-light font-mono'>Followers</span>
            <span className='text-[1.125rem] font-semibold font-mono'>{followers}</span>
          </div>
          {/* Following */}
          <div className='flex flex-col gap-1 items-center'>
            <span className='text-[1.125rem] font-light font-mono'>Following</span>
            <span className='text-[1.125rem] font-semibold font-mono'>{following}</span>
          </div>
        </div>

        {/* Developer Contacts Section */}
        <div className='flex flex-col gap-2 md:gap-[0.65rem] md:justify-between py-3 md:px-6 my-1 rounded-md bg-red-100 w-[250px] md:w-[510px]'>

          {/* Upper Section */}
          <div className='flex flex-col md:flex-row gap-2 md:gap-0 justify-center md:justify-between items-center'>
            <div className='flex flex-col md:flex-row items-center gap-1 md:gap-2'>
              <img src={LocationIcon} alt="" className='w-[15px] md:w-[16px] h-[20px]' />
              <span className='text-[1.125rem] font-medium font-mono'>{location ? location: "Not updated"}</span>
            </div>
            <div className='flex flex-col md:flex-row my-2 md:my-0 items-center gap-1 md:gap-3'>
              <img src={WebsiteIcon} alt="" className='w-[17px] h-[20px]' />
              <span className='text-[1.125rem] font-medium font-mono'>{website ? website: "Not updated"}</span>
            </div>
          </div>
          
          {/* Lower Section */}
          <div className='flex flex-col md:flex-row gap-2 md:gap-0 justify-center md:justify-between items-center'>
            <div className='flex flex-col md:flex-row my-2 md:my-0 items-center gap-1 md:gap-[0.38rem]'>
              <img src={TwitterIcon} alt="" className='w-[20px] h-[20px]' />
              <span className='text-[1.125rem] font-medium font-mono'>{twitter_username ? twitter_username: "Not updated"}</span>
            </div>
            <div className='flex flex-col md:flex-row my-2 md:my-0 items-center gap-1 md:gap-2'>
              <img src={CompanyIcon} alt="" className='w-[17px] h-[20px]' />
              <span className='text-[1.125rem] font-medium font-mono'>{company ? company: "Not updated"}</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default DevDetails