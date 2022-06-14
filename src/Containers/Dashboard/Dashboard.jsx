import './Dashboard.scss';
import NavBar from '../../Components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' />
        <Route path='/music' />
        <Route path='/contact' />
        <Route path='/forum' />
        <Route path='/merch' />
      </Routes>
    </div>
  );
};

export default Dashboard;
