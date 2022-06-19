import './ContactForm.scss';
import { useState } from 'react';

const ContactForm = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e) => {
    //stops the page refreshing
    e.preventDefault();

    const name = e.target.elements[0].value;
    const email = e.target.elements[1].value;

    // validate the form
    if (!name || !email || !email.includes('@')) {
      setHasError(true); //will trigger a rerender of component and change the state
      return;
    }

    // do form stuff here... omitted for sake of exercise
    setHasError(false);
    setHasSubmitted(true);
  };

  return (
    <div className='contact-form'>
      {!hasSubmitted ? (
        <form onSubmit={handleSubmit} className='contact-form__form'>
          <label htmlFor='username-input'>Name</label>
          <input type='text' id='username-input' />
          <label htmlFor='email-input'>Email</label>
          <input type='email' id='email-input' />
          <label htmlFor='text-input'>Reason for contact</label>
          <textarea name='text' id='text-input' cols='30' rows='10'></textarea>
          <button className='contact-form__button'>Submit</button>
          {hasError && <div className='alert'>Sorry something went wrong</div>}
        </form>
      ) : (
        <div>
          <p className='contact-form__success'>
            Thank you for submitting! We'll be in touch
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
