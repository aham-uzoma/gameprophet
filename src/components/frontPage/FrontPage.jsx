import React from 'react'
import Navbar from '../navbar/Navbar'
import ImageSlider from '../backgroundImageSlider/ImageSlider'
import PredictTable from '../predictTable/PredictTable'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import HistoryDataComponent from '../historyPage/HistoryDataComponent';

const FrontPage = () => {
  return (

    <section className=' bg-amber-50 font-sen'>
      <ImageSlider />
      <PredictTable />
      <div className='flex flex-col justify-center w-screen items-center font-sen'>
        <h1 className='text-3xl mb-5 mt-14 font-bold'>HISTORY</h1>
      </div>

    <HistoryDataComponent sliceValue={(0, -2)} />

    </section>

  )
}

export default FrontPage