import './css/styles.css';
import './css/main.min.css';
import '../node_modules/bootstrap/js/index.esm';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return(
    <div>
      <Navbar />
      <Landingpage />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;
