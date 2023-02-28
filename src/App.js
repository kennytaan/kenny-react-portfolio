import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga';
import { Helmet, HelmetProvider } from 'react-helmet-async';

ReactGA.initialize('UA-258302878-1');
ReactGA.event({'category':'Test', 'action':'submit','label':'label'});

function App() {
  
  return (
    <HelmetProvider>
      <Helmet>
        <title>{"<Kenny/>"}</title>
      </Helmet>
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
