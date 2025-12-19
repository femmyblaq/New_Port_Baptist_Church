import { ThemeProvider } from './context/ThemeContext'
import './App.css'
import TopNavbar from "./components/TopNavbar"

import Home from './Pages/Home'
import About from './Pages/About'
import Dashboard from './Pages/Dashboard/Dashboard'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Donation from './Pages/Donation'
import Hfc from './Pages/Hfc'
import JoinMember from './Pages/JoinMember'
import NotFound from './Pages/NotFound'
function App() {

  return (
    <>
      <ThemeProvider>
            <TopNavbar></TopNavbar>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/about' element={<About></About>} />
          <Route path='/dashboard' element={<Dashboard></Dashboard>} />
          <Route path='/join-member' element={<JoinMember />} />
          <Route path='/donation' element={<Donation />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/home-fellowship-centers' element={<Hfc />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
