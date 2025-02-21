import Intro from './Intro.jsx';
import Intro2 from './Intro2.jsx';
import Intro3 from './Intro3.jsx';  
import Promo from './Promo.jsx';
import FormBasic from './FormBasic.jsx';
import { RadioGroup, RadioOption } from "./RadioForms.jsx";
import { useState } from "react";

function HomePage(){
    const [selected, setSelected] = useState("");

    return(
        <div>
            <FormBasic />
            <Intro />
            <Intro2 />
            <Intro3 />
            <Promo />
            <h2>How did you hear about Little Lemon?</h2>
            <RadioGroup onChange={setSelected} selected={selected}>
                <RadioOption value="social_media">Social Media</RadioOption>
                <RadioOption value="friends">Friends</RadioOption>
                <RadioOption value="advertising">Advertising</RadioOption>
                <RadioOption value="other">Other</RadioOption>
            </RadioGroup>
            <button disabled={!selected}>Submit</button>
        </div>
    )
}

export default HomePage;