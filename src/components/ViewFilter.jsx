import { MdOutlineCalendarViewDay, MdCalendarViewWeek, MdOutlineCalendarViewMonth } from 'react-icons/md'
import { Link} from 'react-router-dom'

const ViewFilter = () => {

  const resetScrollPosition = () => {
        sessionStorage.setItem('scrollPosition', 0)
    }

  return (
    <div className='flex flex-row items-center justify-center'>
        <button className='px-3 lg:hover:scale-105 duration-300' onClick={resetScrollPosition}><Link to="/view"><MdCalendarViewWeek size={30} color='white'/></Link></button>
        <button className='px-3 lg:hover:scale-105 duration-300' onClick={resetScrollPosition}><Link to="/list"><MdOutlineCalendarViewDay size={30} color='white'/></Link></button>
        <button className='px-3 lg:hover:scale-105 duration-300' onClick={resetScrollPosition}><Link to="/grid"><MdOutlineCalendarViewMonth size={30} color='white'/></Link></button>
    </div>
  )
}

export default ViewFilter