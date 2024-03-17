import {Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

const  App =()=> {
  return (
    <Routes>
      <Route index element={<Navbar/>}/>

    </Routes>
  );
}

export default App;
