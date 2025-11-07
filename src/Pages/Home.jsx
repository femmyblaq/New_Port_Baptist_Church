import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { Link } from "react-router-dom"
import HeroSection from "../components/HeroSection"
import Programs from '../components/Programs'
import WorshipArea from '../components/WorshipArea'
import Anthem from '../components/Anthem'
// import Calendar from '../components/Calender'
import NpbcObjectives from '../components/NpbcObjectives'
import MemberList from '../components/MemberList'
import EventCards from "../components/EventCard"

function Home() {
const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <>
    <HeroSection></HeroSection>
      {/* <h1>Home Page</h1>
        <Link to="/about">About Page</Link>
        <Link to="/dashboard">Dashboard Page</Link> */}
        <NpbcObjectives />
        <Programs />
        <WorshipArea />
        <div className="container">
            <EventCards />
        </div>
        <Anthem />
        
        <MemberList />
    </>
  )
}

export default Home