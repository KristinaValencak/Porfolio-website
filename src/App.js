import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Education from './pages/Education';
import ContactMe from './pages/ContactMe';
import Foot from './pages/Foot';

//<Switch>
//<Route path='/' exact Component={Home} />
//</Switch>

function App() {
  
  return (
   
    <div className='App'>
      
      <Navbar />
      
      
      <Home />
      <About />
      <Skills />
      <Education />
      <ContactMe />
      <Foot />
    </div>
      
      
      
    );
    }

      export default App;

          


