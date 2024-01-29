import { Link } from "react-router-dom"
import cineLogo from "../assets/cinemetrix.png"

const NavBar = () => {

  const resetScrollPosition = () => {
        sessionStorage.setItem('scrollPosition', 0)
    }

  return (
    <div className='flex flex-col justify-center items-center mx-auto py-7'>
        <Link to="/"><img className="animate-fade-down hover:scale-105 duration-300" src={cineLogo} alt="cinemetrix" onClick={resetScrollPosition}/></Link>
    </div>
  )
}

export default NavBar