import React, { createContext, useEffect, useState } from 'react'
import axios from '../api/axios';


//const  PredictionDataContext = createContext({})

const AppContext = createContext({});

export const ContextProvider = ({children}) => {

    const [auth, setAuth] = useState({});
    const [userPredictions, setUserPredictions] = useState([])
    const [groupedPredictionData, setGroupedPredictionData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            await axios.get("/").then(
              response=>{
                console.log('RESPONSE:', response)
                // if (response.status === 200 && /^<!DOCTYPE html>/.test(response.data)) {
                //   console.error('Received HTML content instead of expected data. Likely a redirect to a login page.');
                //   // Handle redirect (e.g., display a login form)
                //   window.location.href = response.request.responseURL;

                // }else{
                //   setUserPredictions(response.data);
                // }
                setUserPredictions(response.data);

              }
            ).catch(error=>{
              console.log('ERROR1',error)
            })
        };
      
        fetchData();
      
      }, [setUserPredictions]);
          
      useEffect(() => {
        const fetchData = async () => {
            await axios.get("/grouped-by-timestamp").then(response=>{
           
              // if (response.status === 200 && /^<!DOCTYPE html>/.test(response.data)) {
              //   console.error('Received HTML content instead of expected data. Likely a redirect to a login page.');
              //   // Handle redirect (e.g., display a login form)
              //   window.location.href = response.request.responseURL;
              // }else{
              //   setGroupedPredictionData(response.data);

              // }
              setGroupedPredictionData(response.data);


            }).catch(error =>{
              console.log('ERROR', error)
            })

        };
      
        fetchData();
      
      }, [setGroupedPredictionData]); // Empty dependency array (optional for this specific case)

  return (
        <AppContext.Provider
        value={{
          auth,
          setAuth,
          userPredictions,
          setUserPredictions,
          groupedPredictionData,
          setGroupedPredictionData,
        }}
      >
        {children}
      </AppContext.Provider>
  )
}

export default AppContext