import './css/styles.css';
import './css/main.min.css';
import '../node_modules/bootstrap/js/index.esm';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import About from './components/About';

function App() {
  return(
    <div>
      <Navbar />
      <Landingpage />
      <About />
    </div>
  )
}

export default App;
