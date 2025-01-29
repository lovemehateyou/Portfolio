import React, { useState } from 'react';
import styles from '../styles/contact.module.css'
import image from '../assets/Premium Vector _ Contact us_ woman with headphones and microphone with computer_.jpg'
import emailjs from 'emailjs-com';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });



      const[message, setmessage] = useState('')
    
      const handleChange = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();

        if(!formData.email || !formData.email.includes('@gmail')){
          alert('Please enter a valid email gmail address')
          return;
        }
    
        
        const serviceID = 'service_kczl67r';
        const templateID = 'template_tqx5abq';
        const userID = 'o3ofobDK0vJsz_aUq';

    
        emailjs
          .send(
            serviceID,
            templateID,
            {
              from_name: formData.name,
              email_id: formData.email,
              message: formData.message,
            },
            userID
          )
          .then(
            (response) => {
              alert('Thank you for contacting me! Your message has been sent.');
              setFormData({ name: '', email: '', message: '' });
            },
            (error) => {
              alert('An error occurred, please try again.');
              console.error('FAILED...', error);
            }
          );
      };
    
    
  return (
    <div className={styles.contact_us_container}>
    <h1>Contact Me</h1>
    <p>I’d love to hear from you! Whether you have a question or need assistance, feel free to reach out.</p>

    <div className={styles.contact_content}>

    <div className={styles.contact_img}>
      <img src ={image}/>
    </div>
    
    <form className={styles.contact_form} onSubmit={handleSubmit}>
      <div className={styles.form_group}>
        <label htmlFor="name">Name</label>
        <input
          
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
      
        <label htmlFor="email">Email</label>
        <input
        
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <p>{message}</p>
     
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        />
      </div>
      <button type="submit" className={styles.submit_button}>Send Message</button>
    </form>
  </div>
  </div>
  )
}

export default Contact
