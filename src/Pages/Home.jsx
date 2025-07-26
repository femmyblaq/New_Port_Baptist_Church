import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { Link } from "react-router-dom"
import TopNavbar from "../components/TopNavbar"
import HeroSection from "../components/HeroSection"

function Home() {
const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <>
    <TopNavbar></TopNavbar>
    <HeroSection></HeroSection>
      {/* <h1>Home Page</h1>
        <Link to="/about">About Page</Link>
        <Link to="/dashboard">Dashboard Page</Link> */}
    </>
  )
}

export default Home