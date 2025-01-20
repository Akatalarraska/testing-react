import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.jsx';
import Intro from './components/Intro.jsx';
import Intro2 from './components/Intro2.jsx';
import Intro3 from './components/Intro3.jsx';  
import Footer from './components/Footer.jsx';

function App(){
  return (
    <>
      <Nav />
      <Intro />
      <Intro2 />
      <Intro3 />
      <Footer />
    </>
  );
}

export default App;
