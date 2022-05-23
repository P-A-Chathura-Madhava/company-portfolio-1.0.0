import logo from './logo.svg';
import './App.css';
import Home from '../src/js/Home';
import About from '../src/js/About';
import Project from '../src/js/Places';
import Blog from '../src/js/Reserve';
import Contact from '../src/js/Subscribe';
import Footer from '../src/js/Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Project/>     
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
