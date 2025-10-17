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
import QuizPage from './pages/QuizPage';
import GamePage from './pages/GamePage';
import RandomPage from './pages/RandomPage';

//pages for the Marks' story 
import StoryLine from './StoryLine/StoryLine';
import StoryLineFinal from './StoryLine/StoryLineFinal';

//protected routes
import ProtectedRoute from './components/ProtectedRoute';





function App() {

  const { isMobile } = useDeviceDetect();
  

  return (
    <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          {isMobile ? (
            <Route path='/' element={<MobileView />} />
          ) : (
            <Route path='/' element={<DesktopView />} />
          )}
          <Route path='/register' element={<Registration/>}/>
          <Route path='/login' element={<Login/>}/>

          {/* Protected Routes */}

          <Route path='/storyLine' element={<ProtectedRoute><StoryLine /></ProtectedRoute>} />

          <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>} />

          <Route path='/scan' element={<ProtectedRoute><ScanQR/></ProtectedRoute>} />

          <Route path='/leaderboard' element={<ProtectedRoute><LeaderBoard/></ProtectedRoute>} />

          <Route path='/alreadyVisited' element={<ProtectedRoute><AlreadyVisitedBooth/></ProtectedRoute>} />

          <Route path='/chooseDifficulty' element={<ProtectedRoute><ChooseDificultyPage/></ProtectedRoute>} />

          <Route path='/questionPage' element={<ProtectedRoute><QuestionPage/></ProtectedRoute>} />

          <Route path='/summaryPage' element={<ProtectedRoute><SummaryPage/></ProtectedRoute>} />

          <Route path='/quiz' element={<ProtectedRoute><QuizPage/></ProtectedRoute>} />

          <Route path='/game' element={<ProtectedRoute><GamePage/></ProtectedRoute>} />

          <Route path='/random/:randomType' element={<ProtectedRoute><RandomPage/></ProtectedRoute>} />

          <Route path='/storyLineFinal' element={<ProtectedRoute><StoryLineFinal/></ProtectedRoute>} />

        </Routes>
      
    </BrowserRouter>
  )
}

export default App
