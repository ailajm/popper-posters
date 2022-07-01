<<<<<<< HEAD
import './App.css';
import {useState, useEffect} from 'react';
import MovieCard from './components/movieCard/MovieCard';

=======
// import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import MovieCard from './components/movieCard/MovieCard';
import ScrollButton from './components/scrollButton/ScrollButton';
>>>>>>> master

function App() {
  const [state, setState] = useState([]);
  
<<<<<<< HEAD
  
  const getMovieData = async () => {
    try {
      // const API_KEY = '31c8c9bf37b71837f31ec5a6e33bfac5';
      const BASE_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=31c8c9bf37b71837f31ec5a6e33bfac5&language=en-US&page=1`;
      const movies = await fetch(BASE_URL).then(res => res.json());
      
      setState(movies.results);
      console.log(movies.results);
=======
  const getMovieData = async () => {
    try {
      const API_KEY = '31c8c9bf37b71837f31ec5a6e33bfac5';
      const BASE_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`;
      const movies = await fetch(BASE_URL).then(res => res.json());
      
      setState(movies.results);
>>>>>>> master
      
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    getMovieData();
  }, []
  );

  return (
    <div className="App">
      <header className="App-header">
<<<<<<< HEAD
        <h1>MOVIES Now Showing!</h1>
      </header>
        {state.map((movie) => (
          <MovieCard title={movie.title} poster={movie.poster_path} />
        ))}
=======
        <h1 className='blink_me'>Now Showing!</h1>
      </header>
      <div className='movie'>
        {state.map((movie) => (
          <MovieCard key={movie.title} title={movie.title} poster={movie.poster_path} />
        ))}
      </div>
      <div className='scrollUp'>
        <ScrollButton/>
      </div>
>>>>>>> master
    </div>
  );
}

export default App;
