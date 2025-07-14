import './App.css'

//custom hook to detect de device 
import useDeviceDetect from './hooks/useDeviceDetect'


import { BrowserRouter, Routes, Route } from "react-router-dom";

//First Pages
import Login from './pages/Login';
import Registration from './pages/Registration'

//principal pages
import MobileView from './MobileView'
import DesktopView from './DesktopView'
import Home from './pages/Home';
import ScanQR from './pages/ScanQR';
import LeaderBoard from "./pages/LeaderBoard"
import AlreadyVisitedBooth from './pages/AlreadyVisitedBooth';
import ChooseDificultyPage from "./pages/ChooseDificultyPage"
import QuestionPage from './pages/QuestionsPage'; 
import SummaryPage from './pages/SummaryPage';





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

          <Route path='/alreadyVisited' element={<AlreadyVisitedBooth/>}/>

          <Route path='/chooseDifficulty' element={<ChooseDificultyPage/>}/>

          <Route path='/questionPage' element={<QuestionPage/>}/>

          <Route path='/summaryPage' element={<SummaryPage/>}/>


        </Routes>
      
    </BrowserRouter>
  )
}

export default App
