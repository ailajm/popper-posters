import './App.css';
import {useState, useEffect} from 'react';
import MovieCard from './components/movieCard/MovieCard';
import ScrollButton from './components/scrollButton/ScrollButton';
import Marquee from './components/marquee/Marquee';

function App() {
  const [state, setState] = useState([]);
  // let USER_QUERY;
  
  const getMovieData = async () => {
    try {
      const API_KEY = '31c8c9bf37b71837f31ec5a6e33bfac5';
      const BASE_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`;
      // let SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${USER_QUERY}&page=1&include_adult=false`
      let movies;
      // let userSearch;

      // ADD SEARCH LOGIC
      // if(search button clicked) {
      //  userSearch = await fetch(SEARCH_URL).then(res => res.json());

      //  setState(userSearch.results);
      // }else {
      movies = await fetch(BASE_URL).then(res => res.json());
      
      setState(movies.results);
      // };
      
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    getMovieData();
  }
  );

  return (
    <div className="App">
      <Marquee/>
      <div className='movie'>
        {state.map((movie) => (
          <MovieCard key={movie.title} title={movie.title} poster={movie.poster_path} />
        ))}
      </div>
      <ScrollButton/>
    </div>
  );
}

export default App;
