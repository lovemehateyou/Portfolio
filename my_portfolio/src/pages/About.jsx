import {React,useState,useEffect} from 'react';
import styles from '../styles/about.module.css';
import logo from '../assets/CodeSets-removebg-preview.png';
import me from '../assets/p-photo.jpg';
import ScrollReveal from "scrollreveal";
import { Link } from 'react-router-dom'


function About(){

useEffect(() => {
    const sr = ScrollReveal({
    origin: "left",
    distance: "50px",
    duration: 2000,
    reset: false,
    });
      
    sr.reveal(`.${styles.skillcontain}`, { interval: 200 });
}, []);


    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [js, setJs] = useState(0);
    const [react, setReact] = useState(0);
    const [node, setNode] = useState(0);

    // Helper function to increment skill values
    const incrementValue = (setter, max) => {
        const intervalId = setInterval(() => {
            setter((prev) => {
                if (prev < max) {
                    return prev + 1;
                } else {
                    clearInterval(intervalId); // Clear interval when max is reached
                    return prev;
                }
            });
        }, 30);
    };

    // Run the progress bars once after the component mounts
    useEffect(() => {
        incrementValue(setHtml, 75);
        incrementValue(setCss, 75);
        incrementValue(setJs, 65);
        incrementValue(setReact, 56);
        incrementValue(setNode, 46);
    }, []);

    return(
<>
        <section className={styles.hero}>
              <div className={styles.hero_dis}>
                    <h1>Alazar Zerubabel</h1>
                    <h3>Front-end developer</h3>
                    <p>
                    I’m a front-end designer with a passion for crafting visually stunning and user-friendly websites. Combining problem-solving, creativity, and technical expertise, I turn ideas into seamless digital experiences. From e-commerce platforms to interactive designs, I thrive on building solutions that inspire and engage. Let’s create something amazing together!
                    </p>
        
                  <span>
                  <button onClick={()=>navigate('/contact')}> Contact Me </button>
                  
                  <a href='/Alazar zerubael (5).pdf' download='Alazar-Zerubabel-CV.pdf'>
                  <button>Upload CV</button>
                  </a>
                  
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


            {/* center the skill grid */}
            <section className={styles.allskill}>
                
                <h1>My Skills</h1>

                {/* creating the skills grid */}
                <div className={styles.skillgrid}>


                    {/* contains a single skill bar */}
                    <div className={styles.skillcontain}>
                        <div className={styles.outer}>
                            <div className={styles.inner}>
                                <p>HTML</p>
                                <div id={styles.number}>
                                    {html}%
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#e91e63" />
                    <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" stroke-linecap="round" className={styles.c1} />
        </svg>
                    </div>

                     {/* contains a single skill bar */}
                     <div className={styles.skillcontain}>
                     <div className={styles.outer}>
                            <div className={styles.inner}>
                                <p>CSS</p>
                                <div id={styles.number}>
                                    {css}%
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#e91e63" />
                    <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" stroke-linecap="round" className={styles.c2}/>
        </svg>
                    </div>

                     {/* contains a single skill bar */}
                     <div className={styles.skillcontain}>
                     <div className={styles.outer}>
                            <div className={styles.inner}>
                                <p>JavaScript</p>
                                <div id={styles.number}>
                                    {js}%
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#e91e63" />
                    <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" stroke-linecap="round" className={styles.c3}  />
        </svg>
                    </div>

                     {/* contains a single skill bar */}
                     <div className={styles.skillcontain}>
                     <div className={styles.outer}>
                            <div className={styles.inner}>
                                <p>React.Js</p>
                                <div id={styles.number}>
                                    {react}%
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#e91e63" />
                    <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" stroke-linecap="round" className={styles.c4}  />
        </svg>
                    </div>

                    {/* contains a single skill bar */}
                    <div className={styles.skillcontain}>
                    <div className={styles.outer}>
                            <div className={styles.inner}>
                                <p>Node.js</p>
                                <div id={styles.number}>
                                    {node}%
                                </div>
                            </div>
                        </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                    <defs>
                        <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                        </linearGradient>
                    </defs>
                    <circle cx="80" cy="80" r="70" stroke-linecap="round" className={styles.c5}  />
                </svg>
                    </div>

                    <div className={styles.skillcontain}>
                     <div className={styles.outer}>
                            <div className={styles.inner}>
                                <p>Tailwind</p>
                                <div id={styles.number}>
                                    {react}%
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#e91e63" />
                    <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" stroke-linecap="round" className={styles.c3}  />
        </svg>
                    </div>
            
                </div>
            </section>

        <section className={styles.workflow_container}>
        
              <h1 className={styles.workflow_title}>
                Vision for the Future
              </h1>
              <p className={styles.workflow_description}>
              Here’s a glimpse into the goals and aspirations driving my journey forward. Each plan represents a step toward creating impactful projects, continuous learning, and contributing to innovative solutions
              </p>
        
              <div className={styles.workflow_steps}>
        
                <div className={styles.workflow_step }>
                  <h2>Develop a Portfolio of Diverse Projects</h2>
                  <p>
                  Build a range of websites and applications, including e-commerce platforms, business solutions, and interactive user interfaces, showcasing creativity and technical expertise.
                  </p>
                </div>
        
                <div className={styles.workflow_step }>
                  <h2>Master Advanced 3D and AI Integration</h2>
                  <p>
                  Deepen skills in 3D animation and artificial intelligence to create visually captivating and intelligent applications for web and software platforms.
                  </p>
                </div>
        
                <div className={styles.workflow_step}>
                  <h2>Launch a Personal Tech Blog</h2>
                  <p>
                  Share knowledge, insights, and tutorials on topics like front-end development, design principles, and emerging technologies to help others in the field.
                  </p>
                </div>

                <div className={styles.workflow_step}>
                  <h2>Collaborate with Global Teams</h2>
                  <p>
                  Work with professionals worldwide on innovative projects, leveraging diverse perspectives and experiences to create meaningful solutions.
                  </p>
                </div>

                <div className={styles.workflow_step}>
                  <h2>Start a Tech Consultancy</h2>
                  <p>
                  Offer services to businesses, helping them enhance their digital presence through custom solutions, including websites, apps, and digital marketing strategies.
                  </p>
                </div>

                <div className={styles.workflow_step}>
                  <h2>Pursue Continuous Learning</h2>
                  <p>
                  Stay ahead in the tech industry by learning new frameworks, languages, and tools, ensuring my skills remain relevant and innovative in a rapidly changing environment.
                  </p>
                </div>
        
              </div>
            </section>

       <section className={styles.overall}>
          <div className={styles.card2}>
              <div className={styles.circle} style={{ "--clr": "#a506c6" }}>
                  {<img src={logo} alt="" className={styles.sign}/>}
              </div>
              <div className={styles.content}>
                  <h2>Want to work Together!</h2>
                  <p>Transform your product showcase into an engaging and interactive experience with our sleek animated card design. Let's collaborate to bring your ideas to life and captivate your audience! </p>
                   <a href=""><Link to= '/contact'>Explore More</Link></a>
              </div>
              <img src="" alt="" className={styles.sign_img}/>
          </div>
          </section>


</>
    )
}

export default About