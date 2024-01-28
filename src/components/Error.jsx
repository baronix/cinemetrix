import { Link } from 'react-router-dom'
import cineLogo from "../assets/cinemetrix.png"

const Error = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
        <img src={cineLogo} alt="cinemetrix" />
        <h1 className='text-5xl text-white pb-4'>Oops. Page not found</h1>
        <Link to="/"><button className='bg-white rounded px-3 py-2'>Back to movies</button></Link>
    </div>
  )
}

export default Error