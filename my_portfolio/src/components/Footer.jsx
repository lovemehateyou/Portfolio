import React,{useState} from 'react';
import styles from '../styles/footer.module.css';
import { Link } from 'react-router-dom'

const Footer = () => {
    
  const [input,setinput] = useState() 

    function subscribe(){
        if(input.includes('@')){
            alert("You have Notified my LinkedIn");
        document.querySelector(`${styles.email_input}`).innerHTML = ''
        }
        else{
            alert('Input a Proper Email')
        }
        
    }
  return (
    <footer className={styles.footer}>

       <div className={styles.footer_left}>

        <p className={styles.newsletter_text}>
          Stay up to date on the latest features and releases I create. Connect to my LinkedIn
        </p>

        <div className={styles.newsletter}>

          <input 
          type="email" 
          value={input} 
          placeholder="Your email" 
          onChange={(e) => setinput(e.target.value)}
          className={styles.email_input} 
          />

          <button onClick={subscribe} className={styles.subscribe_button}>Subscribe</button>
        </div>
      </div> 

      <div className={styles.footer_columns}>

        <div className={styles.contacts}>
          <h3>Contacts</h3>
          <ul>
            <li>Phone: +251 095 671 5491</li>
            <li>Email: alazarzerubabel@gmial.com</li>
            <li><Link to = 'https://github.com/lovemehateyou'>GitHub</Link></li>
            </ul>
        </div>

        <div className={styles.column}>
          <h3>Website Links</h3>
          <ul>
            <li> <Link to='/' >Home</Link></li>
            <li><Link to='/projects'>Services</Link></li>
            <li> <Link to='/About'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>

        <div className={styles.social}>
          <h3>Follow me</h3>
          <ul>
            <li> <Link to ='https://web.facebook.com/profile.php?id=61561858356906'>Facebook</Link></li>
            <li> <Link to='https://www.instagram.com/alazar.zerubabel/' >Instagram</Link> </li>
            <li><Link to ='https://x.com/AZerubabel20'>X</Link></li>
            <li><Link to ='https://www.linkedin.com/in/alazar-zerubabel-1061372b9/'>LinkedIn</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
