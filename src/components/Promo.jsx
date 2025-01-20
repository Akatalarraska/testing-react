function Promo(){

    const handleClick = () => {
        console.log("You clicked the button!")
    }
    return(
        <div className="promo-section">
            <div>
                <h1>Don't miss this deal!</h1>
                </div>
                <div>
                <h2>Subscribe to my newsletter and get all the shop items at 50% off!</h2>
            </div>

            <button onClick={handleClick}>
                Click here
            </button>
    </div>
    )
}

export default Promo;