import './Dashboard.scss';
import NavBar from '../../Components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import Music from '../../Pages/Music/Music';
import Contact from '../../Pages/Contact/Contact';
import Forum from '../../Pages/Forum/Forum';
import Merch from '../../Pages/Merch/Merch';

const Dashboard = () => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/music' element={<Music />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/forum' element={<Forum />} />
          <Route path='/merch' element={<Merch />} />
        </Routes>
      </Router>
    </>
  );
};

export default Dashboard;
