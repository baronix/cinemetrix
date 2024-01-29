import { useEffect, useLayoutEffect, useState } from 'react'
import axios from 'axios';
import { FaStar, FaSortAmountDownAlt, FaSortAmountUp } from "react-icons/fa";
import AnimatedPage from './AnimatedPage';
import { Link, useLocation } from 'react-router-dom';
import ViewFilter from './ViewFilter';
import BackToTop from './BackToTop';

const ViewGrid = () => {
  const [filmes,setFilmes] = useState([]);
  const location = useLocation();

    const FILMESURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_APIKEY}`

     useEffect(() => {
    axios.get(FILMESURL)
            .then((response)=> {
                setFilmes(response.data)
                sessionStorage.setItem('location', JSON.stringify(location.pathname));
            })
            .catch((err) => { console.log(err)})
     
  }, []);

    useLayoutEffect(()=>{
        {
            sessionStorage.getItem('scrollPosition')
            ? 
            scrollTo(0,sessionStorage.getItem('scrollPosition')) 
            : 
            scrollTo(0,0)
        }
    })

    const [sortState, setSortState] = useState(!(sessionStorage.getItem('sorted')) || sessionStorage.getItem('sorted') == false ? "descending" : sessionStorage.getItem('sorted'));
    const sortMethods = {
    ascending: { method: (a, b) => (a.vote_average > b.vote_average ? 1 : -1) },
    descending: { method: (a, b) => (a.vote_average > b.vote_average ? -1 : 1) },
  };

    const setDescending = () => {
        sessionStorage.setItem('sorted', 'descending')
    }
    
    const setAscending = () => {
        sessionStorage.setItem('sorted', 'ascending')
    }

    const setScrollPosition = () => {
        sessionStorage.setItem('scrollPosition', window.pageYOffset)
    }

    const resetScrollPosition = () => {
        sessionStorage.setItem('scrollPosition', 0)
    }

    const ascendingReset = () => {
        setAscending();
        resetScrollPosition();
    }

    const descendingReset = () => {
        setDescending();
        resetScrollPosition();
    }

  return (
    <>
    <AnimatedPage>
    <div className="container max-w-[1280px] mx-auto md:px-12 mb-5">
        <div className="flex flex-wrap -mx-1 lg:-mx-4 items-center justify-center">
            <div className='flex w-[100%] justify-between px-4'>
                <ViewFilter/>
                <div className='flex pt-3 pb-5'>
                    <button className='pr-3 lg:hover:scale-105 duration-300' onClick={descendingReset}><FaSortAmountDownAlt color='white' size={20} onClick={() => setSortState("descending")}/></button>
                    <button className='lg:hover:scale-105 duration-300' onClick={ascendingReset}><FaSortAmountUp color='white' size={20} onClick={() => setSortState("ascending")}/></button>
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-4">
                {filmes.results?.sort(sortMethods[sortState].method).map(filme => (
                <Link key={filme.id} to={ `/movie/${filme.id}`} onClick={setScrollPosition}>
                <article className="overflow-hidden rounded-lg shadow-lg relative z-0 lg:hover:scale-105 duration-300 animate-fade">

                    <div>
                        <img className="block h-auto w-full" src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}/>
                    </div>

                    <div className='absolute lg:top-6 top-2 lg:right-3 right-2 z-10'>
                        <span className="bg-white border border-black text-black text-xs font-medium me-3 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300 flex font-primary">
                            <FaStar className='pr-1' color='#c39400' size={30}/>
                            <p className='text-2xl'>{Math.floor(filme.vote_average * 10)/10}</p>
                        </span>
                    </div>
                </article>
                </Link>
                ))}
            </div>
        </div>
    </div>
    <BackToTop/>
    </AnimatedPage>
    </>
  )
}

export default ViewGrid