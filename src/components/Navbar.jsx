import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

function Navbar() {
const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <>
      <h1>Navbar Page</h1>

      <button onClick={toggleTheme} className={theme ? 'bg-primary' : 'bg-sucess'}>Switch to {theme === 'light' ? 'Dark' : 'light'} Mode</button>
    </>
  )
}

export default Navbar