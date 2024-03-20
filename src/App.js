import {Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ImageSlider from './components/backgroundImageSlider/ImageSlider';
import './App.css'
import LayOut from './components/layout/LayOut';
import FrontPage from './components/frontPage/FrontPage';


const  App =()=> {
  return (
    <Routes>
      <Route path='/' element={<LayOut />}>
      <Route index element={<FrontPage />} />
      </Route>


    </Routes>
  );
}

export default App;
