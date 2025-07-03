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


        </Routes>
      
    </BrowserRouter>
  )
}

export default App
