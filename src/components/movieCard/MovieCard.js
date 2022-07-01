const MovieCard = (props) => {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w300${props.poster}`} alt='Movie Poster' />
            {props.title}
        </div>
    )
};

export default MovieCard;