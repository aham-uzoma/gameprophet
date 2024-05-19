import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'


const  PredictionDataContext = createContext({})

export const ContextProvider = ({children}) => {

    const BASE_URL = 'http://localhost:8080/api/v1/predict';


    const [userPredictions, setUserPredictions] = useState([])

    useEffect(() => {
        axios.get(BASE_URL).then((res) => {
            console.log('UserData:',res.data)
            setUserPredictions(res.data)
        }).catch((error) => console.log(error))
    }, [])
    
  
  return (

    <PredictionDataContext.Provider value={{userPredictions, setUserPredictions}}>
        {children}
    </PredictionDataContext.Provider>
  )
}

export default PredictionDataContext