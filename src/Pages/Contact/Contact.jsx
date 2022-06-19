import './Contact.scss';
import ContactForm from '../../Components/ContactForm/ContactForm';
import GigPic from '../../Assets/Images/RU-gig-pic.jpg';

const Contact = () => {
  return (
    <div className='contact'>
      <h2 className='contact__title'>Contact Us</h2>
      <div className='contact__container'>
        <img className='contact__gig-image' src={GigPic} alt='Gig' />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
