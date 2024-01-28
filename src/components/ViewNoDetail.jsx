import { useEffect, useState } from 'react'
import axios from 'axios';
import { FaStar, FaSortAmountDownAlt, FaSortAmountUp } from "react-icons/fa";
import AnimatedPage from './AnimatedPage';
import { Link } from 'react-router-dom';
import ViewFilter from './ViewFilter';

const ViewNoDetail = () => {

    const [filmes,setFilmes] = useState([]);

    const FILMESURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_APIKEY}`

     useEffect(() => {
    axios.get(FILMESURL)
            .then((response)=> {
                setFilmes(response.data)
            })
            .catch((err) => { console.log(err)})
     
  }, []);

    const [sortState, setSortState] = useState("descending");
    const sortMethods = {
    ascending: { method: (a, b) => (a.vote_average > b.vote_average ? 1 : -1) },
    descending: { method: (a, b) => (a.vote_average > b.vote_average ? -1 : 1) },
  };

  return (
    <>
    <AnimatedPage>
    <div className='max-w-[1280px] flex flex-col justify-center items-center mx-auto mb-5'>
            <div className='flex w-[100%] justify-between px-4'>
                <ViewFilter/>
                <div className='flex pt-3 pb-5'>
                    <button className='pr-3 lg:hover:scale-105 duration-300'><FaSortAmountDownAlt color='white' size={20} onClick={() => setSortState("descending")}/></button>
                    <button className='lg:hover:scale-105 duration-300'><FaSortAmountUp color='white' size={20} onClick={() => setSortState("ascending")}/></button>
                </div>
            </div>
        <div className='max-w-[1280px] grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center mx-auto px-4'>
            {filmes.results?.sort(sortMethods[sortState].method).map(filme => (
            <Link key={filme.id} to={`/movie/${filme.id}`}>
              <div className="max-w-sm h-auto w-full  shadow-lg shadow-black rounded-md bg-gradient-to-r from-gray-100 to-gray-300 lg:hover:scale-105 duration-300">
                <div className="h-full flex-none bg-cover rounded-md text-center overflow-hidden" title={filme.title}>
                    <img className='rounded-md' src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} alt="" />
                </div>
                <div className="border-r border-b border-l border-gray-400 bg-white rounded-b p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl mb-2 font-primary line-clamp-1">{filme.title}</div>
                            <p className="text-gray-700 text-base font- line-clamp-2">{filme.overview}</p>
                        </div>
                <div className="flex flex-col justify-between">
                    <div className='flex items-center'>
                        <p className="text-lg font-bold font-primary text-gray-600 flex items-center">
                            IMDb:    
                            <FaStar className='pl-1' color='#c39400'/>
                            {Math.floor(filme.vote_average * 10)/10}
                        </p>
                    </div>
                    <div className="text-sm hidden lg:block">
                        <p className="text-gray-600 font-secondary">Release date: {filme.release_date}</p>
                    </div>
                </div>
            </div>
        </div> 
        </Link>
            ))}
        </div>
        
    </div>
    </AnimatedPage>
    </>
  )
}

export default ViewNoDetail