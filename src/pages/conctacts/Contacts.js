import React, { useState } from 'react';
import './Contacts.css';

const contacts = {
  phone: '+250787402048',
  email: 'peacepascy@gmail.com',
  whatsapp: '250787402048',
};

export default function Contacts() {
  const [sendMsg, setSendMsg] = useState({
    name: '',
    message: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setSendMsg({ ...sendMsg, [e.target.name]: e.target.value });
  };

  const buildMessage = () =>
    `Hello, my name is ${sendMsg.name}\nEmail: ${sendMsg.email}\nPhone: ${sendMsg.phone}\n\n${sendMsg.message}`;

  const viaWhatsapp = () => {
    const url = `https://wa.me/${contacts.whatsapp}?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const viaMail = () => {
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:${contacts.email}?subject=Portfolio%20Enquiry&body=${body}`;
  };

  return (
    <div className='contactMain'>
    
      <div className='contactHeader'>
        <span className='section-label'>Say Hello</span>
        <h2 className='section-title'>Let's Build Together</h2>
        <p className='section-subtitle'>
          Have a project in mind? Reach out and let's see what we can create.
        </p>
      </div>

      <div className='contactLayout'>
       
        <div className='contactInfo'>
          <p className='contactInfoText'>
            I'm always open to new opportunities, collaborations, and interesting
            projects. Drop me a message and I'll get back to you as soon as possible.
          </p>

          <div className='contactDetails'>
            <a className='contactDetail' href={`mailto:${contacts.email}`}>
              <span className='contactDetailIcon'>✉️</span>
              {contacts.email}
            </a>
            <a className='contactDetail' href={`tel:${contacts.phone}`}>
              <span className='contactDetailIcon'>📞</span>
              {contacts.phone}
            </a>
            <a
              className='contactDetail'
              href={`https://wa.me/${contacts.whatsapp}`}
              target='_blank'
              rel='noreferrer'
            >
              <span className='contactDetailIcon'>💬</span>
              WhatsApp
            </a>
          </div>
        </div>

 
        <div className='contactCard'>
          <h3 className='contactCardTitle'>Ready to start a project?</h3>
          <p className='contactCardSub'>
            Choose your preferred way to get in touch — I'll respond promptly.
          </p>

          <div className='contactBtns'>
            <button
              id='whatsapp-btn'
              type='button'
              className='contact1'
              onClick={viaWhatsapp}
              aria-label='Connect via WhatsApp'
            >
              💬 Connect via WhatsApp
            </button>
            <button
              id='email-btn'
              type='button'
              className='contact2'
              onClick={viaMail}
              aria-label='Connect via Email'
            >
              ✉️ Send an Email
            </button>
          </div>
        </div>
      </div>

     
      <div className='contactFooter'>
        <span>© {new Date().getFullYear()} Pascaline Mahoro. All rights reserved.</span>
        
      </div>
    </div>
  );
}
