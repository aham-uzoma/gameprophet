import React from 'react'
import Navbar from '../navbar/Navbar'
import ImageSlider from '../backgroundImageSlider/ImageSlider'
import PredictTable from '../predictTable/PredictTable'

const FrontPage = () => {
  return (
    <>
    <div className=' bg-amber-50'>
    <ImageSlider/>
    <PredictTable/>
    </div>
    </>
  )
}

export default FrontPage