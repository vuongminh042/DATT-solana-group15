
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/website/Home/Home'
import About from './pages/website/About/About'
import Contact from './pages/website/Contact/Contact'
import Causes from './pages/website/Causes/Causes'
import CauseDetails from './pages/website/Cause-details/Cause-details'
import Events from './pages/website/Events/Events'
import EventsDetails from './pages/website/Events-details/Events-details'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/causes' element={<Causes />} />
        <Route path='/cause-details' element={<CauseDetails />} />
        <Route path='/events' element={<Events />} />
        <Route path='/events-details' element={<EventsDetails />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
