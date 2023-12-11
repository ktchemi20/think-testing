import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Manual from './pages/Manual';
import Automated from './pages/Automated';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/about' exact Component={About} />
          <Route path ='manual' exact Component={Manual} />
          <Route path ='automated' exact Component={Automated} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
