import Intro from './Intro.jsx';
import Intro2 from './Intro2.jsx';
import Intro3 from './Intro3.jsx';  
import Promo from './Promo.jsx';
import FormBasic from './FormBasic.jsx';

function HomePage(){
    return(
        <div>
            <FormBasic />
            <Intro />
            <Intro2 />
            <Intro3 />
            <Promo />
        </div>
    )
}

export default HomePage;