import './App.css'
import useDeviceDetect from './hooks/useDeviceDetect'


import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Login from './pages/Login';
import Registration from './pages/Registration'

//principal pages
import MobileView from './MobileView'
import DesktopView from './DesktopView'
import Home from './pages/Home';
import ScanQR from './pages/ScanQR';
import LeaderBoard from "./pages/LeaderBoard"



function App() {

  const { isMobile } = useDeviceDetect();

  return (
    <BrowserRouter>
        <Routes>
          {isMobile ? (
            <Route path='/' element={<MobileView />} />
          ) : (
            <Route path='/' element={<DesktopView />} />
          )}

          <Route path='/login' element={<Login/>}/>

          <Route path='/register' element={<Registration/>}/>

          <Route path='/home' element={<Home/>}/>

          <Route path='/scan' element={<ScanQR/>}/>

          <Route path='/leaderboard' element={<LeaderBoard/>}/>


        </Routes>
      
    </BrowserRouter>
  )
}

export default App
