import React, { useEffect, useState } from 'react'
import SearchIcon from './../assets/images/search-icon.svg'

const SearchBar = ({getUserQuery}) => {

  const [userInput,setUserInput] = useState("");

  const handleUserInput = (event) => {
    const inputValue = event.target.value;
    setUserInput(inputValue);
  }

  const sendUserInputToApp = () => {
    getUserQuery(userInput);
  }

  useEffect(() => {
    const initialDevDetails = "abbu-imran-23";
    getUserQuery(initialDevDetails);
  },[])

  return (
    <>
      <div className='flex border-2 rounded-lg px-2 h-[50px] md:h-[60px] w-[350px] md:w-[680px] justify-between items-center'>
        <div className='flex gap-1'>
          <img src={SearchIcon} alt="" className='w-7 h-7 mt-[0.15rem] ml-[0.375rem]' />
          <input type="text" placeholder='Enter the Username...'
          onChange={handleUserInput} value={userInput}
          className='outline-none border-none text-[1.3rem] font-mono mb-1 ml-1 bg-bgColor w-[300px] h-[30px]' />
        </div>
        <button 
        className='bg-buttonColor hidden md:block hover:bg-buttonHoverColor text-white text-[1.17rem] py-1 px-2 rounded-md font-mono font-semibold'
        onClick={sendUserInputToApp}>Submit</button>
      </div>
      <button 
        className='bg-buttonColor block md:hidden hover:bg-buttonHoverColor text-white text-[1.17rem] py-1 px-2 rounded-md font-mono font-semibold'
        onClick={sendUserInputToApp}>Submit</button>
    </>
  )
}

export default SearchBar