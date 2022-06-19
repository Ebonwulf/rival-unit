import './Home.scss';
import HomeImg from '../../Assets/Images/RU-gig-pic.jpg';

const Home = () => {
  return (
    <div className='home'>
      <h1 className='home__heading'>Rival Unit</h1>
      <p className='home__para'>
        Welcome to the Rival Unit website, where you can find everything you
        want to know about the band and more!
      </p>
      <img className='home__img' src={HomeImg} alt='Rival Unit gig pic' />
    </div>
  );
};

export default Home;
