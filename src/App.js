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
import PersistLogIn from './components/requireAuth/PersistLogIn';
import MyProfile from './components/userPage/MyProfile';
import VerifyEmail from './components/verifyEmail/VerifyEmail';
import { useState } from 'react';
import Payment from './components/payments/Payment';


const  App =()=> {
  const [verified, setVerified] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  return (

    <ContextProvider>

    <Routes>

      {/* Unprotected Routes */}

      <Route path='/' element={<LayOut />}>

      <Route index element={<FrontPage />} />

      <Route path='register' element={<Register/>}/>

      <Route path='logIn' element={<LogIn setIsLoggedIn={setIsLoggedIn}/>}/>

      <Route path='history' element={<HistoryPage />} />

      <Route path='verifyEmail' element={<VerifyEmail verified={verified} setVerified={setVerified}/>}/>


      {/* Protected Routes */}
      <Route element={<PersistLogIn/>}>

      <Route element={<RequireAuth allowedRoles={[3012]}/>}>

      <Route path='payment' element={<Payment/>}/>
      
      <Route path='vip' element={<VipPage />} />

      <Route path='myProfile' element={<MyProfile/>}/>

      </Route>

      <Route element={<RequireAuth allowedRoles={[5601]}/>}>

      <Route path='profilePage' element={<UserPage/>}/>

      </Route>

      </Route>

      </Route>

    </Routes>

    </ContextProvider>

  );

}

export default App;
