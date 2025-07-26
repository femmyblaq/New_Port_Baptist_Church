import { ThemeProvider } from './context/ThemeContext'
import './App.css'
// import Navbar from './components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Dashboard from './Pages/Dashboard/Dashboard'
import { Routes, Route } from 'react-router-dom'
import Programs from './components/Programs'
import Events from './components/Events'
import Footer from './components/Footer'
import Anthem from './components/Anthem'
import Calendar from './components/Calender'
import MemberList from './components/MemberList'
function App() {

  return (
    <>
      <ThemeProvider>
        {/* <Navbar></Navbar> */}
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/about' element={<About></About>} />
          <Route path='/dashboard' element={<Dashboard></Dashboard>} />
        </Routes>
        <Anthem />
        <Programs />
        <Events />
        <div className="container">
            <Calendar />
        </div>
        
        <MemberList />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
