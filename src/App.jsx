import React from 'react'
import './App.css'
import DevDetails from './Components/DevDetails'
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'

const App = () => {
  return (
    <div className='w-full gap-2 h-[100vh] flex flex-col justify-center items-center bg-bgColor'>
      <Header/>
      <SearchBar/>
      <DevDetails/>
    </div>
  )
}

export default App