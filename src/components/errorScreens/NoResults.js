// SETS UP COMPONENT TO DISPLAY WHEN NO RESULTS ARE FOUND DURING SEARCH

const NoResults = () => {

    return(
        
        <div className="noResultsScreen">
            <div className="wrapper">
                <div className="box">
                    <img src="cyborg-face-5.png" alt="Sad Face"></img>
                    <p>We've got nothing</p>
                </div>
            </div>
        </div>
    )
};

export default NoResults;
