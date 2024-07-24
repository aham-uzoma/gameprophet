import React, { useContext, useEffect, useState } from 'react'
import ImageSlider from '../backgroundImageSlider/ImageSlider'
import PredictTable from '../predictTable/PredictTable'
import HistoryDataComponent from '../historyPage/HistoryDataComponent';

const FrontPage = () => {

  return (

    <section className=' bg-amber-50 font-sen pb-96'>
      <ImageSlider />
      <PredictTable />
      <div className='flex flex-col justify-center w-screen items-center font-sen'>
        <h1 className='text-2xl md:text-3xl mb-0 mt-14 font-bold'>HISTORY</h1>
      </div>

    <HistoryDataComponent sliceValue={(0, -2)} />

    </section>

  )
}

export default FrontPage