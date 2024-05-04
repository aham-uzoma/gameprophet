import {Route, Routes } from 'react-router-dom';
import './App.css'
import LayOut from './components/layout/LayOut';
import FrontPage from './components/frontPage/FrontPage';
import HistoryPage from './components/historyPage/HistoryPage';
import VipPage from './components/vipPage/VipPage';
import Pricing from './components/pricing/Pricing';
import UserPage from './components/userPage/UserPage';


const  App =()=> {
  return (
    <Routes>
      <Route path='/' element={<LayOut />}>
      <Route index element={<FrontPage />} />
      <Route path='history' element={<HistoryPage />} />
      <Route path='vip' element={<VipPage />} />
      <Route path='pricing' element={<Pricing/>}/>
      <Route path='profilePage' element={<UserPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
