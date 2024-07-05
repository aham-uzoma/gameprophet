import {Route, Routes } from 'react-router-dom';
import './App.css'
import LayOut from './components/layout/LayOut';
import FrontPage from './components/frontPage/FrontPage';
import HistoryPage from './components/historyPage/HistoryPage';
import VipPage from './components/vipPage/VipPage';
import Pricing from './components/pricing/Pricing';
import UserPage from './components/userPage/UserPage';
import { ContextProvider } from './context/ContextProvider';
import Register from './components/register/Register';
import LogIn from './components/logIn/LogIn';
import RequireAuth from './components/requireAuth/RequireAuth';


const  App =()=> {

  return (

    <ContextProvider>

    <Routes>

      {/* Unprotected Routes */}

      <Route path='/' element={<LayOut />}>

      <Route index element={<FrontPage />} />

      <Route path='register' element={<Register/>}/>

      <Route path='logIn' element={<LogIn/>}/>

      <Route path='history' element={<HistoryPage />} />

      <Route path='pricing' element={<Pricing/>}/>

      {/* Protected Routes */}

      <Route element={<RequireAuth />}>

      <Route path='vip' element={<VipPage />} />

      <Route path='profilePage' element={<UserPage/>}/>

      </Route>

      </Route>

    </Routes>

    </ContextProvider>

  );

}

export default App;
