import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
        <h1 className='text-5xl text-white pb-4'>Oops. Page not found</h1>
        <Link to="/"><button className='bg-white rounded px-3 py-2'>Back to movies</button></Link>
    </div>
  )
}

export default Error