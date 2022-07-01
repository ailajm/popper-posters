const MovieCard = (props) => {
    return (
        <div class='movieCard'>
            <div class='movieTitle'>
                {props.title}
            </div>
            <div class='moviePoster'>
                <img src={`https://image.tmdb.org/t/p/w300${props.poster}`} alt='Movie Poster' />
            </div>
        </div>
    )
};

export default MovieCard;