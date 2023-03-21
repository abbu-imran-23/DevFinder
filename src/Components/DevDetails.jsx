import React from 'react'
import SearchIcon from './../assets/images/search-icon.svg'
import { LocationIcon, WebsiteIcon, TwitterIcon, CompanyIcon } from '../Utils/Icons'

const DevDetails = () => {
  return (
    <div className='w-[680px] border-2 mt-1 gap-3 flex flex-row rounded-lg p-3'>
      
      {/* Left */}
      <div className='w-[120px] h-[120px] rounded-[50%] bg-profileImage bg-cover mt-1 ml-1'>
      </div>

      {/* Right */}
      <div className='w-[500px] flex flex-col gap-3 p-1'>
        
        {/* Name, Joining date and Username */}
        <div className='w-[500px]'>
          <div className='flex justify-between items-center'>
            <h2 className='text-3xl font-semibold font-mono'>Imran Pasha</h2>
            <span className='text-[1.125rem] mt-1 font-light font-mono'>Joined 05 May 2020</span>
          </div>
          <span className='text-[1.1rem] font-light font-mono'>@abbuimran023</span>
        </div>

        {/* Bio Section */}
        <p className='text-[1.125rem] font-light font-mono'>Ex @permissionles, Ex @gumlet,
           Frontend Developer at @we-frame,
           Core Member at @aec-coding-club,
           Technical Expert at @gsasansol
        </p>

        {/* Stats Section */}
        <div className='w-[510px] my-1 bg-[#e1e4df] p-1 rounded-md flex justify-evenly items-center'>
          {/* Repos */}
          <div className='flex flex-col gap-1 items-center'>
            <span className='text-[1.125rem] font-light font-mono'>Repos</span>
            <span className='text-[1.125rem] font-semibold font-mono'>21</span>
          </div>
          {/* Followers */}
          <div className='flex flex-col gap-1 items-center'>
            <span className='text-[1.125rem] font-light font-mono'>Followers</span>
            <span className='text-[1.125rem] font-semibold font-mono'>21</span>
          </div>
          {/* Following */}
          <div className='flex flex-col gap-1 items-center'>
            <span className='text-[1.125rem] font-light font-mono'>Following</span>
            <span className='text-[1.125rem] font-semibold font-mono'>21</span>
          </div>
        </div>

        {/* Developer Contacts Section */}
        <div className='flex flex-col gap-2 p-3 my-1 rounded-md bg-red-100 w-[510px]'>

          {/* Upper Section */}
          <div className='flex flex-row justify-between'>
            <div className='flex items-center gap-2'>
              <img src={LocationIcon} alt="" className='w-[17px] h-[20px]' />
              <span className='text-[1.125rem] font-medium font-mono'>Not found</span>
            </div>
            <div className='flex items-center gap-3'>
              <img src={WebsiteIcon} alt="" className='w-[17px] h-[20px]' />
              <span className='text-[1.125rem] font-medium font-mono'>Not found</span>
            </div>
          </div>
          
          {/* Lower Section */}
          <div className='flex flex-row justify-between'>
            <div className='flex items-center gap-[0.38rem]'>
              <img src={TwitterIcon} alt="" className='w-[20px] h-[20px]' />
              <span className='text-[1.125rem] font-medium font-mono'>Not found</span>
            </div>
            <div className='flex items-center gap-2'>
              <img src={CompanyIcon} alt="" className='w-[17px] h-[20px]' />
              <span className='text-[1.125rem] font-medium font-mono'>Not found</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default DevDetails