import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/contact.css"
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
} from 'react-icons/fa';

import { FiSend } from 'react-icons/fi';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kx2ilvr', 'template_m9kgy9s', form.current, 'tBWJ3TVzjcdThe2d6')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section className="contact section" style={{ marginTop: "10px" }}>
      <h2 style={{ textAlign: "center" }}>Let's <span>Connect!</span></h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">We're just a message away.</h3>
          <p className="contact__description">
            If you have any questions about our products or need more information, please feel free to reach out. We're here to help and can be contacted using the information provided below. Your feedback is important to us, and we strive to provide excellent customer service. Thank you for considering contacting us, and we'll ensure to respond promptly to your inquiry.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon' />

              <div>
                <h4 className="info__title">Mail Us</h4>
                <span className="info__desc">Shopswift@gmail.com</span>
              </div>
            </div>

            <div className="info__item">
              <div>
                <h4 className="info__title">Twitter</h4>
                <span className="info__desc">www.shop-twitter.com</span>
              </div>

              <div>
                <h4 className="info__title">Instagram</h4>
                <span className="info__desc">www.shop-insta.com</span>
              </div>
            </div>
          </div>

        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="form__input-group">

            <div className="form__input-div">
              <input type="text" name='user_name' placeholder='Your Name' className='form__control' />
            </div>

            <div className="form__input-div">
              <input type="email" name='user_email' placeholder='Your email-id' className='form__control' />
            </div>

            <div className="form__input-div">
              <input type="text" name='subject' placeholder='Subject' className='form__control' />
            </div>



          </div>

          <div className="form__input-div">
            <textarea name='message' placeholder='Your Message' className="form__control textarea"></textarea>
          </div>

          <button className='btn btn-primary' type='submit' value="Send">Send Message<span>
            <FiSend style={{ fontSize: "20px", marginLeft: "5px" }} />
          </span></button>
        </form>


      </div>
    </section>
  )
}

export default Contact;
