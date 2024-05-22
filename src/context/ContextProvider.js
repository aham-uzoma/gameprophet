import React, { createContext, useEffect, useState } from 'react'
import axios from '../api/axios';


const  PredictionDataContext = createContext({})

export const ContextProvider = ({children}) => {

    const [userPredictions, setUserPredictions] = useState([])

    useEffect(() => {
        axios.get("/").then((res) => {
            console.log('UserData:',res.data)
            setUserPredictions(res.data)
        }).catch((error) => console.log(error))
    }, [])

  //   useEffect(() => {
  //     axios.get("/grouped-by-timestamp").then((res) => {
  //         console.log('UserData:',res.data)
  //         setUserPredictions(res.data)
  //     }).catch((error) => console.log(error))
  // }, [])
    
  
  return (

    <PredictionDataContext.Provider value={{userPredictions, setUserPredictions}}>
        {children}
    </PredictionDataContext.Provider>
  )
}

export default PredictionDataContext