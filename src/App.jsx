import Home from './components/home.jsx'
import Profile from './components/profile.jsx'
import {Route, Routes} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  )
}

export default App
