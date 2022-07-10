// SETS UP COMPONENT TO DISPLAY WHEN AN ERROR IS ENCOUNTERED

const ErrorScreen = () => {

    return(
        
        <div className="errorScreen">
            <div className="wrapper">
                <div className="box">
                    <img src="cyborg-face-5.png" alt="Sad Face"></img>
                    <p>Sorry, it's me, not you.</p>
                </div>
            </div>
        </div>
    )
};

export default ErrorScreen;
