import React, { createContext, useEffect, useState } from 'react'
import axios, { axiosWithCredentials } from '../api/axios';
import useAxiosPrivate from '../hooks/useAxiosPrivate';



//const  PredictionDataContext = createContext({})

const AppContext = createContext({});

export const ContextProvider = ({children}) => {

    const [auth, setAuth] = useState({});
    // const [nextSubscriptionDate, setNextSubscriptionDate] = useState(null)
    const [userPredictions, setUserPredictions] = useState([])
    const [groupedPredictionData, setGroupedPredictionData] = useState({})
    const [userCount, setUserCount] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [subscribed, setSubscribed] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            await axios.get("/predictions/all").then(
              response=>{
                console.log('RESPONSE:', response)
                setUserPredictions(response.data);

              }
            ).catch(error=>{
              console.log('ERROR1',error)
            })
        };
      
        fetchData();
      
      }, [setUserPredictions]);

    useEffect(()=>{
      const fetchUserCount = async () =>{
        await axios.get('getCount/userCount').then(
          response=>{
            setUserCount(response.data.userCount)
            console.log('UserCountError',response.data.userCount)
          }
        ).catch(error=>{
          console.log('UserCountError', error)
        })
      }

      fetchUserCount()

    },[setUserCount])
          
      // useEffect(() => {
      //   const fetchData = async () => {
      //     await axios.get("/getGroupedPrediction").then(response=>{
      //        console.log('response.data',response.data)
      //         setGroupedPredictionData(response.data);


      //       }).catch(error =>{
      //         console.log('ERROR', error)
      //       })

      //   };
      
      //   fetchData();
      
      // }, [setGroupedPredictionData]); // Empty dependency array (optional for this specific case)

      useEffect(() => {
        const fetchData = async () => {
          await axios.get("/getGroupedPrediction").then(response=>{
            setIsLoading(true)
             console.log('response.data',response.data)
              setGroupedPredictionData(response.data);
            setIsLoading(false)

            }).catch(error =>{
              console.log('ERROR', error)
              setIsLoading(false)
            })

        }
      
        fetchData()
      
      }, []); // Empty dependency array (optional for this specific case)


      useEffect(()=>{
        if(groupedPredictionData != {}){
        console.log('groupedPredictionData22', groupedPredictionData)}
      },[groupedPredictionData])
      useEffect(()=>{
        if(groupedPredictionData != {}){
        console.log('groupedPredictionData33', groupedPredictionData)}
      },[groupedPredictionData])

  return (
        <AppContext.Provider
        value={{
          auth,
          setAuth,
          userCount,
          subscribed,
          setUserCount,
          setSubscribed,
          userPredictions,
          setUserPredictions,
          // nextSubscriptionDate,
          groupedPredictionData,
          // setNextSubscriptionDate,
          setGroupedPredictionData,
          isLoading,
        }}
      >
        {children}
      </AppContext.Provider>
  )
}

export default AppContext