import './App.css'
import useDeviceDetect from './hooks/useDeviceDetect'
import MobileView from './MobileView'
import DesktopView from './DesktopView'



function App() {

  const { isMobile } = useDeviceDetect();

  return (
    <>
      {isMobile ? <MobileView /> : <DesktopView />}
    </>
  )
}

export default App
