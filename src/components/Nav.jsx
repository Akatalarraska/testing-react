import { Link, Route, Routes } from "react-router-dom";
import AboutMe from "./AboutMe";
import HomePage from "./HomePage";

function Nav() {
  return (
    <div>
        <nav className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/about-me">About Me</Link>
        </nav>
        <Routes>
        <Route path="/" elementa={<HomePage />} />
        <Route path="/about-me" elementa={<AboutMe />} />
        </Routes>
    </div>
  );
}

export default Nav;