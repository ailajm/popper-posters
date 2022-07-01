import './App.css';
import {useState, useEffect} from 'react';
import MovieCard from './components/movieCard/MovieCard';


function App() {
  const [state, setState] = useState([]);
  
  
  const getMovieData = async () => {
    try {
      // const API_KEY = '31c8c9bf37b71837f31ec5a6e33bfac5';
      const BASE_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=31c8c9bf37b71837f31ec5a6e33bfac5&language=en-US&page=1`;
      const movies = await fetch(BASE_URL).then(res => res.json());
      
      setState(movies.results);
      console.log(movies.results);
      
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
        <h1>MOVIES Now Showing!</h1>
      </header>
        {state.map((movie) => (
          <MovieCard title={movie.title} poster={movie.poster_path} />
        ))}
    </div>
  );
}

export default App;
