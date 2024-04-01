import './App.css';
import Navbar from './navbar';
import Home from './home'
import About from './about';
import Project from './project';
import Contact from './contact';
import Service from './service';
import { FaArrowCircleUp } from "react-icons/fa";
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <About/>
        <Project/>
        <Service/>
        <Contact/>
        <a className='up' href='#'><FaArrowCircleUp/></a>
    </div>
  );
}

export default App;
