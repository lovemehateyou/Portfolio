import React, { useRef, useState, useEffect } from 'react';
import styles from '../styles/projects.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import habeshaImage from "../assets/habesha.png";
import alexandria from "../assets/alexandria .png";
import chatting from '../assets/chatting.jpg';
import GitHub from '../components/Github';
import Productgrid from '../components/productgrid'





const Projects = () => {

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

  const [likes, setLikes] = useState(() => {
    const savedLikes = localStorage.getItem('likes');
    return savedLikes ? JSON.parse(savedLikes) : { 1: 0, 2: 0, 3: 0 };
  });

  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(likes));
  }, [likes]);

  const handleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: prevLikes[id] + 1,
    }));
  };


  const [url , setUrl] = useState("");

  const proj = [
    {
      id: 1,
      image: habeshaImage,
      title: "B2C E-commerce Website",
      description: "It is a B2C E-commerce website that allows users to buy products online. It has a user-friendly interface and a secure line of communication and customer service.",
      status: "completed",
    },
    {
      id: 2,
      image: alexandria,
      title: "Buisness Website",
      description: "A website for a business that provides services to its customers showing the companies services, contact information, and location.",
      status: "completed",
    },
    {
      id: 3,
      image: chatting,
      title: "Enawgaw",
      description: "A chatting site that allows users to chat with each other. It has a user-friendly interface and a secure line of communication and customer service.",
      status: "in progress",
    }

    
  ]


  const container = useRef(null);

  const { scrollYProgress } = useScroll({ target: container });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-68%']); 
  


  

  const handelurlchange= (id)=>{
    if(id===1){
      setUrl("https://habeshamarket.onrender.com")
    }
    else if(id===2){
      setUrl("https://alexandriadesign.netlify.app/")
    }
  }

  return (
    <div className={styles.overall}>
      
      <div className={styles.header}>
        <h1>My Projects</h1>
      </div>

      
        <div className={styles.projects} ref={container}>

        {isMobile ? (
        <Productgrid />
      ):(

        <div className={styles.wrapper} >

       

          <motion.div className={styles.containerall} style={{ x }}>

            {proj.map((project, index) => (

              <section className={`${styles.section}`} key={index}>

                <div className={styles.proj}>

                  <div className={styles.img}>

                    <img src={project.image} alt="" />
                  </div>

                  <div className={styles.disc}>
                      <h1>{project.title}</h1>
                      <p>{project.description}</p>
                      <p>{project.status}</p>
                      {project.status === "in progress" ? (
                        <a href={url} target="__blank" onClick={() => handelurlchange(project.id)}>UnAvailable</a>
                      ) : (
                        <a href={url} target="__blank" onClick={() => handelurlchange(project.id)}>view</a>
                      )}
                                    
                      <div className={styles.likes}>
                      <button onClick={() => handleLike(project.id)}>Like</button>
                      <span>{likes[project.id]} Likes</span>
                      </div>
                  </div>
                 

                </div>
              </section>
             ) 
            )}

          </motion.div>
           
        </div>
      )}
      </div>
     

      

      <section>
      <div className={styles.header2}>
        <h1>My GitHub Activities</h1>
      </div>

      <div className='git'>
        <GitHub />
      </div>

      </section>

    </div>
  );
};

export default Projects;
