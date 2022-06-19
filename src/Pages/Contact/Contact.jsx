import './Contact.scss';
import ContactForm from '../../Components/ContactForm/ContactForm';
import GigPic from '../../Assets/Images/RU-gig-pic.jpg';
import CassettePic from '../../Assets/Images/ru-cassette-img.png';

const Contact = () => {
  return (
    <div className='contact'>
      <h2 className='contact__title'>Contact Us</h2>
      <div className='contact__container'>
        <img className='contact__gig-image' src={GigPic} alt='Gig' />
        <ContactForm />
        <img className='contact__cassette' src={CassettePic} alt='cassette' />
      </div>
    </div>
  );
};

export default Contact;
