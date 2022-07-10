// SETS UP SEARCH BAR COMPONENT TO SEARCH MOVIES

const MovieSearchBar = () => (

    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search movies</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search movies"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default MovieSearchBar;
