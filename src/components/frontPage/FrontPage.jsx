import React from 'react'
import Navbar from '../navbar/Navbar'
import ImageSlider from '../backgroundImageSlider/ImageSlider'
import PredictTable from '../predictTable/PredictTable'

const FrontPage = () => {
  return (
    
    <section className=' bg-amber-50'>
    <ImageSlider/>
    <PredictTable/>
    </section>
    
  )
}

export default FrontPage