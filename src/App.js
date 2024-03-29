import './App.css';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path = '/' element={<Home />}></Route>
        <Route path = '/projects' element={<Projects />}></Route>
        <Route path = '/experience' element={<Experience />}></Route>
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
