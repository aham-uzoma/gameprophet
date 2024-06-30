import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/ContextProvider'

import axios from '../../api/axios'
import HistoryDataComponent from './HistoryDataComponent';



const HistoryPage = () => {
    //const [isLoading, setIsLoading]= useState(false)
    const { groupedPredictionData } = useContext(AppContext)

    const footballPhoto = 'https://cdn.pixabay.com/photo/2021/08/22/20/27/corner-ball-6566084_960_720.jpg'
    const BASE_URL = 'http://localhost:8080/api/v1/predict';


    
//     useEffect(()=>{
//         axios.get(`${BASE_URL}/grouped-by-timestamp`).then(res => {
//             setIsLoading(true)
//            console.log(res.data)
//            setGroupedPredictionData(res.data);
//            setIsLoading(false)
//        }).catch(error => {
//            console.log(error)
//            alert('Error: Something went wrong. Please try again later.');
//            setIsLoading(false)

//        })
//    }, [])
    return (
        <section className=' bg-amber-50 font-sen'>
            <section className='flex flex-col mb-8 '>
                <div className='flex w-screen bg-black bg-cover items-center pl-8' style={{
                    height: '30vh', backgroundImage:
                        `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${footballPhoto})`
                }}>
                    <h1 className='text-3xl font-bold text-red-600'>History.</h1>
                </div>
            </section>

            {/* { isLoading===true? <p>Loading...</p>:  */}
            {/* groupedPredictionData={groupedPredictionData}  */}
            <HistoryDataComponent sliceValue={0}/>
            {/* } */}
        </section>
    )
}

export default HistoryPage