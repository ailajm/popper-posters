const Marquee = () => {
    return (
        <div className='marquee'>
            <div className="lightsLeft">
                <span className="littleDot"></span>
                <span className="dot"></span>
                <span className="bigDot"></span>
            </div>
            <h1>Now Showing!</h1>
            <div className="lightsRight">
                <span className="dot"></span>
                <span className="bigDot"></span>
                <span className="littleDot"></span>
            </div>
        </div>
    )
};

export default Marquee;