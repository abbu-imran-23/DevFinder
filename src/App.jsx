import React from 'react'
import './App.css'
import DevDetails from './Components/DevDetails'
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'

const App = () => {
  return (
    <div>
      <Header/>
      <SearchBar/>
      <DevDetails/>
    </div>
  )
}

export default App