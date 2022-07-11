// IMPORTS
import './App.css';
import {useState, useEffect} from 'react';
import MovieCard from './components/card/Card';
import ScrollButton from './components/topScrollButton/TopScrollButton';
// import Marquee from './components/marquee/Marquee';
import MovieSearchBar from './components/movies/MovieSearchBar';
// import NoResults from './components/errorScreen/NoResults';

// SET UP APP
function App() {

  // APP VARIABLES
  const [state, setState] = useState([]);
  const { search } = window.location;
  const REGION = 'en-US';
  const PAGE_NUM = 1;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=${REGION}`;
  let userQuery = new URLSearchParams(search).get('s');
  let SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${REGION}&query=${userQuery}&page=${PAGE_NUM}&include_adult=false`
  let userSearch;
  let movies;
  let marqueeHeader;
  // let TRENDING_PEOPLE_URL = `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=${REGION}&page=${PAGE_NUM}`;

  // FUNCTION TO FETCH MOVIE DATA
  const getMovieData = async () => {
    
    try {

      // SEARCH & FETCH LOGIC
      if(!userQuery) {
    
        movies = await fetch(BASE_URL).then(res => res.json());
        
        setState(movies.results);
      }else {

        userSearch = await fetch(SEARCH_URL).then(res => res.json());

        setState(userSearch.results);
      };
      
    }
    // ERROR HANDLING FOR MOVIE DATA 
    catch(error) {console.log(error);}
  };
  
  // MOVIE DATA HOOK
  useEffect(() => {getMovieData();});
  
  // DYNAMIC HEADER
  if(!userQuery){marqueeHeader = 'Now Showing!';}
  else {marqueeHeader = 'Movies';};

  // RENDER
  return (

    <div className="App">
      <div className='marquee'>
          <span className="leftDot"></span>
          <span className="leftLittleDot"></span>
          <span className="leftBigDot"></span>
          <span className="leftDot"></span>
          <span className="leftLittleDot"></span>
          <span className="leftBigDot"></span>
          <h1 className='headerText'>{marqueeHeader}</h1>
          <span className="rightDot"></span>
          <span className="rightBigDot"></span>
          <span className="rightLittleDot"></span>
          <span className="rightDot"></span>
          <span className="rightBigDot"></span>
          <span className="rightLittleDot"></span>
      </div>
      <MovieSearchBar/>
      {/* <a href={TRENDING_PEOPLE_URL}>Who's hot?!</a> */}
      <div className='movie'>
        {state.map((movie) => (
          <MovieCard key={movie.title} title={movie.title} poster={movie.poster_path} />
        ))}
      </div>
      {/* <NoResults/> */}
      <ScrollButton/>
    </div>
  );
}

export default App;
