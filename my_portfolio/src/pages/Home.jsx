import React from 'react'
import styles from '../styles/home.module.css'
import { Link } from 'react-router-dom'


import client1 from '../assets/portrait-4568762_1920.jpg'
import client2 from '../assets/woman-8643445_1920.png'
import client3 from '../assets/ai-generated-8051238_1920.jpg'

import logo from '../assets/web design.jpg'
import logo2 from '../assets/system design.jpg'
import logo3 from '../assets/Responsive design.jpg'
import logo4 from '../assets/graphic design.jpg'
import me from '../assets/p-photo.jpg';

import logoweb from '../assets/CodeSets-removebg-preview.png';


import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {

  const navigate = useNavigate()

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    handleResize(); 
    // Check on initial render
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  

  const cards = [
    {
      id: "c1",
      icon: "1",
      title: "Web Development",
      description: "Building responsive and user-friendly websites.",
      background: logo,
    },
    {
      id: "c2",
      icon: "2",
      title: "System Design",
      description: "designing and developing scalable and reliable systems.",
      background: logo2,
    },
    {
      id: "c3",
      icon: "3",
      title: "Responsive design",
      description: "Building responsive and user-friendly websites.",
      background: logo3,
    },
    {
        id: "c4",
        icon: "4",
        title: "Graphic Design",
        description: "Creating visually stunning and engaging designs.",
        background: logo4,
      },
   
  ];

  const testimonials = [
    {
      stars: 5,
      feedback: "Our experience with Alexandra was exceptional. They delivered beyond our expectations.",
      name: "John Doe",
      position: "CEO, ABC Company",
      image:client1
    },
    {
      stars: 5,
      feedback: "Working with Alexandra was a game-changer for our business. Their designs are top-notch.",
      name: "Jane Smith",
      position: "Marketing Manager, XYZ Inc.",
      image:client2
    },
    {
      stars: 5,
      feedback: "Alexandra's team is highly skilled and professional. They delivered our project on time and within budget.",
      name: "David Johnson",
      position: "CTO, 123 Corporation",
      image:client3
    },
  ];


    // Scroll Function
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  

  return (
    <>
      <section className={styles.hero}>
      <div className={styles.hero_dis}>

            <h1>Alazar Zerubabel</h1>
            <h4>Full Stack Developer</h4>
            <p>
              Let your creativity flow with stunning animated card design,beautiful illustrations, and captivating animations. I'm a front-end developer with a passion for crafting visually stunning and user-friendly websites. Combining problem-solving, creativity, and technical expertise, I turn ideas into seamless digital experiences. From e-commerce platforms to interactive designs, I thrive on building solutions that inspire and engage. Let’s create something amazing together!
            </p>

          <span>
          <button onClick={()=>navigate('/contact')}> Contact Me </button>
          <button onClick={()=>navigate('/About')}>Learn More</button>
          </span>
            
        </div>
        
      <div className={styles.img_dis}>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <clipPath id = 'clip-path'>
              <path fill="#8A3FFC" d="M49,-71C62.5,-67.6,71.7,-52.3,72.9,-37C74.1,-21.7,67.2,-6.5,59.8,4.8C52.3,16.2,44.1,23.7,38.3,36.9C32.6,50.2,29.2,69.2,19.2,77.9C9.1,86.6,-7.7,84.9,-17.9,75.3C-28.1,65.7,-31.7,48.2,-41.7,36.3C-51.6,24.5,-67.8,18.3,-68.2,10.3C-68.5,2.4,-52.9,-7.3,-46.2,-20.7C-39.5,-34.1,-41.7,-51.2,-35.5,-57.9C-29.2,-64.6,-14.6,-61,1.6,-63.5C17.8,-65.9,35.5,-74.4,49,-71Z" transform="translate(100 100)" />
              </clipPath>
              <image href={me} alt="my profile pic" width='100%' height='100%'  clipPath = "url(#clip-path)" />
          </svg>
      </div> 
    </section>

    <div className={styles.showcase_header}>
        <h1> My Services</h1>
        <p>
        Explore My services and what I offer
        </p>
    </div> 
    
        <section className={styles.wrapper}>
        <div className={styles.container}>
        {cards.map((card, index) => (
          <React.Fragment key={card.id}>
            <input type="radio" name="slide" id={card.id} defaultChecked={index === 0} />
            <label
              htmlFor={card.id}
              className={styles.card}
              style={{  backgroundImage: `url(${card.background})`,
                        backgroundSize: "cover", 
                        backgroundRepeat: "no-repeat", 
                        backgroundPosition: "center"
                    }}
            >
              <div className={styles.row}>
                <div className={styles.icon}>{card.icon}</div>
                <div className={styles.description}>
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              </div>
            </label>
          </React.Fragment>
        ))}
      </div>
      </section>
 

    <section className={styles.workflow_container}>

      <h1 className={styles.workflow_title}>
        What it is to work with me
      </h1>
      <p className={styles.workflow_description}>
        Working with me is like follow a step-by-step process to bring your design
        vision to life. From the initial consultation to the final product.
      </p>

      <div className={styles.workflow_steps}>

        <div className={styles.workflow_step }>
          <h2>Consultation and Concept Development</h2>
          <p>
            We begin by understanding your goals and ideas, conducting thorough
            research, and creating a solid design concept.
          </p>
        </div>

        <div className={styles.workflow_step }>
          <h2>Design and Iteration Process</h2>
          <p>
            Our talented designers work closely with you, refining the design
            through multiple iterations until it meets your expectations.
          </p>
        </div>

        <div className={styles.workflow_step}>
          <h2>Finalization and Delivery</h2>
          <p>
            Once you are satisfied with the design, we finalize it and deliver
            the high-quality files to you.
          </p>
        </div>

      </div>
    </section>

    <section className={styles.overall}>
    <div className={styles.card2}>
        <div className={styles.circle} style={{ "--clr": "#a506c6" }}>
            {<img src={logoweb} alt="" className={styles.sign}/>}
        </div>
        <div className={styles.content}>
            <h2>Want to work Together!</h2>
            <p>Transform your product showcase into an engaging and interactive experience with sleek animated card design like this. Let's collaborate to bring your ideas to life </p>
            <a href=""><Link to= '/contact'>Explore More</Link></a>
        </div>
    </div>
    </section>


    <section className={styles.clients_container}>
      <h2 className={styles.clients_title}>Happy Clients</h2>
      <p className={styles.clients_subtitle}>Read what our clients have to say about us</p>
      
      <div className={styles.testimonials}>
        {isMobile ? (
          // Mobile View: Simple testimonials layout
          <div className={styles.testimonials_mobile}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonial_card}>
                <div className={styles.stars}>
                  {"★".repeat(testimonial.stars)}
                </div>
                <p className={styles.feedback}>{testimonial.feedback}</p>
                <div className={styles.client_info}>
                  <div className={styles.client_avatar}>
                    <img src={testimonial.image} alt={`${testimonial.name}`} />
                  </div>
                  <div className={styles.client_details}>
                    <p className={styles.client_name}>{testimonial.name}</p>
                    <p className={styles.client_position}>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Desktop View: Use the Slider
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonial_card}>
                <div className={styles.stars}>
                  {"★".repeat(testimonial.stars)}
                </div>
                <p className={styles.feedback}>{testimonial.feedback}</p>
                <div className={styles.client_info}>
                  <div className={styles.client_avatar}>
                    <img src={testimonial.image} alt={`${testimonial.name}`} />
                  </div>
                  <div className={styles.client_details}>
                    <p className={styles.client_name}>{testimonial.name}</p>
                    <p className={styles.client_position}>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>

    </>
    
  )

}
export default Home
