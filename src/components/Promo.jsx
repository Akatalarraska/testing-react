import { useState } from "react";

function Promo(){
    const [count, setCount] = useState(0)
    const handleClick = () => {
        console.log("You clicked the button!")
        setCount((prevCount) => prevCount + 1)    }
    return(
        <div className="promo-section">
            <div>
                <h1>Don't miss this deal!</h1>
                </div>
                <div>
                <h2>Subscribe to my newsletter and get all the shop items at 50% off!</h2>
                <h3>You clicked the button:{count} times!</h3>
            </div>

            <button onClick={handleClick}>
                Click here
            </button>
    </div>
    )
}

export default Promo;