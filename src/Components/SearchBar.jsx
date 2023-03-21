import React from 'react'
import SearchIcon from './../assets/images/search-icon.svg'

const SearchBar = () => {
  return (
    <div className='flex border-2 rounded-lg px-2 h-[60px] w-[680px] justify-between items-center'>
      <div className='flex gap-1'>
        <img src={SearchIcon} alt="" className='w-7 h-7 mt-[0.15rem] ml-[0.375rem]' />
        <input type="text" placeholder='Enter the Username...'
        className='outline-none border-none text-[1.3rem] font-mono mb-1 ml-1 bg-bgColor w-[340px] h-[30px]' />
      </div>
      <button className='bg-buttonColor hover:bg-buttonHoverColor text-white text-[1.17rem] py-1 px-2 rounded-md font-mono font-semibold'>Submit</button>
    </div>
  )
}

export default SearchBar