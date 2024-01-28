import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';
import { IoArrowBackCircleOutline } from "react-icons/io5";

const SingleMovie = () => {
    const params = useParams();
    const [filme, setFilme] = useState([])
    const [lastLocation, setLastLocation] = useState();

    const FILMESURL = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_APIKEY}`;
    

     useEffect(() => {
    axios.get(FILMESURL)
            .then((response)=> {
                
                    setFilme(response.data)
                    const location = JSON.parse(sessionStorage.getItem('location'));
                        if (location) {
                        setLastLocation(location);
                        }
            
            })
            .catch((err) => { console.log(err)})
     
  }, []);

    

  return (
    <AnimatedPage>
    <div className='container lg:pb-[50px] lg:pt-8 lg:max-w-[1280px] mx-auto grid lg:grid-cols-2 max-w-[90%] items-center'>
        <div className='flex flex-col items-center lg:items-end lg:pr-10'>
            <h1 className='text-5xl pb-2 text-white font-primary lg:hidden'>{filme.title}</h1>
            <h2 className='text-xl pb-2 text-white font-secondary lg:hidden'>{filme.tagline}</h2>
            <img className='rounded lg:h-[80%] shadow-lg shadow-black h-[300px]' src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} alt={filme.title} />
        </div>
        <div className='flex flex-col lg:items-start items-center pt-6 lg:pt-0'>
            <h1 className='text-5xl pb-2 text-white font-primary hidden lg:block'>{filme.title}</h1>
            <h2 className='text-xl pb-2 text-white font-secondary hidden lg:block'>{filme.tagline}</h2>
            <div className='flex'>
                {filme.genres?.map((genre) => {
                    return (<div key={genre.id} className='pr-2 bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300 font-primary shadow-md shadow-black'>
                                {genre.name}
                            </div>)
                })}
            </div>

            <div className='text-md py-3 text-white flex'>
                <FaStar className='pr-1' color='#c39400' size={20}/>
                <p className='text-md pr-2 font-primary'>{Math.floor(filme.vote_average * 10)/10}/10</p>
                <p className='text-sm font-secondary'>(Rating based on {filme.vote_count} votes)</p>
            </div>
            <p className='text-sm pb-3 text-white font-italic font-secondary'>Release date: {filme.release_date}</p>
            <img className='rounded-md pb-3 ' src={`https://image.tmdb.org/t/p/w500/${filme.backdrop_path}`} alt="" />
            <p className='text-md pb-3 text-white font-secondary max-w-[80%] lg:text-left text-center'>{filme.overview}</p>
            <div className='flex pb-10 lg:pb-0'>
                <button className='bg-white px-3 py-1 rounded lg:hover:scale-105 duration-300 font-primary shadow-lg shadow-black mr-3'><Link to={lastLocation}><IoArrowBackCircleOutline size="40"/></Link></button>
                <button className='bg-white px-3 py-1 rounded lg:hover:scale-105 duration-300 font-primary shadow-lg shadow-black'><a href={`https://www.imdb.com/title/${filme.imdb_id}`}>Visit IMDb</a></button>
            </div>
        </div>
    </div>
    </AnimatedPage>
  )
}

export default SingleMovie