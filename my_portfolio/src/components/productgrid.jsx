import React from "react";
import { useState, useEffect } from "react";
import styles from '../styles/productgrid.module.css'

import habeshaImage from "../assets/habesha.png";
import alexandria from "../assets/alexandria .png";
import chatting from '../assets/chatting.jpg';

function productgrid(){

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

    return(
        <section className={styles.section1}>
        <div className={styles.showcase_grid}>

          {/* first item  */}

            <div className={styles.showcase_item}>
                <div className={styles.showcase_img}>
                { <img src={habeshaImage}/>}
                </div>

                <h3 className={styles.showcase_item_title}>B2C E-commerce Website</h3>
                <p className={styles.showcase_item_desc}>
                It is a B2C E-commerce website that allows users to buy products online. It has a user-friendly interface and a secure line of communication and customer service.
                 </p>   
                 <a className={styles.showcase_item_button} href="https://habeshamarket.onrender.com">View Project</a>

                <div className={styles.likes}>
                    <button onClick={() => handleLike(1)}>Like</button>
                    <span>{likes[1]} Likes</span>
                </div>
            </div>

              {/* Second item  */}

            <div className={styles.showcase_item}>
                <div className={styles.showcase_img}>
                { <img src={alexandria}/>}
                </div>

                <h3 className={styles.showcase_item_title}>Buisness Website</h3>
                <p className={styles.showcase_item_desc}>
                A website for a business that provides services to its customers showing the companies services, contact information, and location.
                 </p>  
                 <a className={styles.showcase_item_button} href="https://alaxandria.netlify.app/" >View Project</a>  

                 <div className={styles.likes}>
                    <button onClick={() => handleLike(2)}>Like</button>
                    <span>{likes[2]} Likes</span>
                </div>
            </div>
            
              {/* Third item  */}

              <div className={styles.showcase_item}>

                <div className={styles.showcase_img}>
                { <img src={chatting}/>}
                </div>

                <h3 className={styles.showcase_item_title}>Enawgaw</h3>
                <p className={styles.showcase_item_desc}>
                A chatting site that allows users to chat with each other. It has a user-friendly interface and a secure line of communication and customer service
                 </p>   
                 <a className={styles.showcase_item_button}>Un Available</a> 

            </div>

        </div>
    </section>
    )
}

export default productgrid