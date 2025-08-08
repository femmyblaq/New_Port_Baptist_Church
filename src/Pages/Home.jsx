import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { Link } from "react-router-dom"
import HeroSection from "../components/HeroSection"
import Programs from '../components/Programs'
import Events from '../components/Events'
import Anthem from '../components/Anthem'
import Calendar from '../components/Calender'
import MemberList from '../components/MemberList'

function Home() {
const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <>
    <HeroSection></HeroSection>
      {/* <h1>Home Page</h1>
        <Link to="/about">About Page</Link>
        <Link to="/dashboard">Dashboard Page</Link> */}
        <Anthem />
        <Programs />
        <Events />
        <div className="container">
            <Calendar />
        </div>
        
        <MemberList />
    </>
  )
}

export default Home