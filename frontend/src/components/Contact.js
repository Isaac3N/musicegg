import React from 'react';
import './Contact.css';
import emailjs from "emailjs-com";
import './button.css'
import { Link } from 'react-router-dom';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_12ep1yt', 'music-egg', e.target, 'user_M1PaGa0fUtIkGQgJ5ytnc')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          })
          e.target.reset()
        };
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Having any issues or thoughts? Let us Know!
        </p>
        <p className='footer-subscription-text'>
          We appreciate your opinion.
        </p>
        
        <div className='footer-link-wrapper'>
        <div className="container">
        <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                        <input type="submit" className="btn btn-one" value="Send Message"></input>
                    </div>
                </div>
            </form>
        </div>
        </div>
      </section>
    
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              MusicEgg
             
            </Link>
          </div>
          <small class='website-rights'>MusicEgg ©2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Contact;
