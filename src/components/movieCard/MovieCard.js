const MovieCard = (props) => {
    return (
<<<<<<< HEAD
        <div>
            <img src={`https://image.tmdb.org/t/p/w300${props.poster}`} alt='Movie Poster' />
            {props.title}
=======
        <div class='movieCard'>
            <div class='movieTitle marquee'>
                {props.title}
            </div>
            <div class='moviePoster'>
                <img src={`https://image.tmdb.org/t/p/w300${props.poster}`} alt='Movie Poster' />
            </div>
>>>>>>> master
        </div>
    )
};

export default MovieCard;