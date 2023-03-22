import React, { useEffect, useState } from 'react'
import { Header, SearchBar, DevDetails } from './Utils/Components'
import { API_KEY } from './Utils/Api'

const App = () => {

  const [devData,setDevData] = useState([]);
  const [userQuery,setUserQuery] = useState("");

  const getUserQuery = (userInput) => {
    const userQueryInput = API_KEY + userInput;
    setUserQuery(userQueryInput);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(userQuery);
        const data = await response.json();
        setDevData(data);
      }
      catch (error) {
        throw (error);
      }
    };

    fetchData();

  },[userQuery])

  return (
    <div className='w-full gap-2 mx-auto min-h-[100vh] flex flex-col justify-center items-center bg-bgColor'>
      <Header/>
      <SearchBar getUserQuery = {getUserQuery}/>
      <DevDetails devInfo = {devData}/>
    </div>
  )
}

export default App