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
      <Route element={<PersistLogIn/>}>

      <Route element={<RequireAuth allowedRoles={[3012]}/>}>

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
