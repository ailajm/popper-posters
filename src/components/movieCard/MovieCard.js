// SETS UP "CARD" TO PLUG IN MOVIE DATA

const MovieCard = (props) => {

    return (

        <div className='movieCard'>
            <div className='movieTitle'>
                {props.title}
            </div>
            <div className='moviePoster'>
                <img src={`https://image.tmdb.org/t/p/w300${props.poster}`} alt='Movie Poster' />
            </div>
        </div>
    )
};

export default MovieCard;
