
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/website/Home/Home'
import About from './pages/website/About/About'
import Contact from './pages/website/Contact/Contact'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
