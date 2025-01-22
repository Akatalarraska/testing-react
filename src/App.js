import './App.css';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './components/HomePage.jsx';
import AboutMe from './components/AboutMe.jsx';

function App(){
  return (
    <>
      <Nav />
      <HomePage />
      <AboutMe />
      <Footer />
    </>
  );
}

export default App;
