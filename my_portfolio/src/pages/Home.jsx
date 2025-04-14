import React, { useRef, useState, useEffect } from 'react';
import styles from '../styles/home.module.css'
import { Link } from 'react-router-dom'


import client1 from '../assets/helena pic.jpg'
import client2 from '../assets/heran pic.jpg'
import client3 from '../assets/saron.jpg'
import client4 from '../assets/mass.jpg'

import logo from '../assets/web design.jpg'
import logo2 from '../assets/system design.jpg'
import logo3 from '../assets/Responsive design.jpg'
import logo4 from '../assets/graphic design.jpg'
import me from '../assets/pic-me.jpg';

import logoweb from '../assets/CodeSets-removebg-preview.png';


import { useNavigate } from 'react-router-dom';
import Scrollbar from 'smooth-scrollbar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {

  const scrollContainerRef = useRef(null);

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

  useEffect(() => {
    if (!isMobile && scrollContainerRef.current) {
      Scrollbar.init(scrollContainerRef.current, {
        damping: 0.07, // Momentum strength
        renderByPixels: true,
        continuousScrolling: true,
        alwaysShowTracks: true,
      });
    }
  }, [isMobile]);

  

  const cards = [
    {
      id: "c1",
      icon: "1",
      title: " Developer",
      description: "Building responsive and user-friendly websites.",
      background: logo,
    },
    {
      id: "c2",
      icon: "2",
      title: "",
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
        title: "UI and UX Design",
        description: "Creating visually stunning and engaging designs.",
        background: logo4,
      },
   
  ];

  const testimonials = [
    {
      stars: 5,
      feedback: "Their eye for design and attention to performance truly set their work apart.",
      name: "Helena",
      position: "UI and UX designer",
      image:client1
    },
    {
      stars: 5,
      feedback: "A reliable developer who consistently delivers efficient, scalable solutions.",
      name: "Heran",
      position: "web developer",
      image:client2
    },
    {
      stars: 5,
      feedback: "Always up-to-date with the latest tech and ready to collaborate with enthusiasm.",
      name: "Saron",
      position: "Front-end developer",
      image:client3
    },

    {
      stars: 5,
      feedback: "Working with him was seamless — clean code, strong logic, and great communication throughout.",
      name: "Maassas",
      position: "Backend developer",
      image:client4
    }
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
    <div ref={scrollContainerRef}>
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
      <svg viewBox="0 20 200 200" xmlns="http://www.w3.org/2000/svg">
              <clipPath id = 'clip-path'>
              <path fill="#FF0066" d="M44.3,-59.6C55.4,-52.9,61,-37.3,67.9,-20.9C74.8,-4.6,82.9,12.5,80.5,28.1C78,43.6,65.1,57.7,49.9,67.5C34.7,77.2,17.4,82.8,-0.1,82.9C-17.6,83.1,-35.2,77.8,-46.3,66.7C-57.4,55.6,-62.1,38.7,-62.9,23.5C-63.8,8.2,-60.7,-5.2,-58.8,-21.6C-56.9,-38,-56.3,-57.2,-46.7,-64.5C-37,-71.8,-18.5,-67,-1,-65.7C16.6,-64.4,33.2,-66.4,44.3,-59.6Z" transform="translate(100 100)" />
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

    </div>
    
  )

}
export default Home
