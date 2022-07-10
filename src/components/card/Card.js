//  IMPORTS
import NoResults from "../errorScreens/NoResults";

// SETS UP "CARD" TO PLUG IN MOVIE DATA

const MovieCard = (props) => {

    if(!props.title) {

        return (
            <NoResults/>
        );
    }
    else {

        return (

            <div className='movieCard'>
                <div className='movieTitle'>
                    {props.title}
                </div>
                <div className='moviePoster'>
                    <img src={`https://image.tmdb.org/t/p/w300${props.poster}`} alt='Movie Poster' />
                </div>
            </div>
        );
    };
}

export default MovieCard;
