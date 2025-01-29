import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/github.module.css';
import ScrollReveal from "scrollreveal";
const apiKey = import.meta.env.VITE_GITHUB_USERNAME;

console.log(apiKey)

const GitHubPosts = () => {

  useEffect(() => {
      const sr = ScrollReveal({
      origin: "top",
      distance: "50px",
      duration: 2000,
      reset: true,
      });
        
      sr.reveal(`.${styles.githubPost}`, { interval: 200 });
  }, []);


  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Replace with your GitHub username
  const githubUsername = `lovemehateyou`; 

  useEffect(() => {
    const fetchGitHubPosts = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${githubUsername}/events/public`);
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub posts:', error);
        setLoading(false);
      }
    };

    fetchGitHubPosts();
  }, [githubUsername]);

  return (
    <div className={styles.githubPosts}>
      <h2>Recent GitHub Activity</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.slice(0, 10).map((post, index) => (
            <li key={index} className={styles.githubPost}>
              <p>
                <strong>{post.repo.name}</strong> 
                {post.payload.commits ? ' committed changes' : ' created an issue'}
              </p>
              <p>{post.created_at}</p>
              <a href='https://github.com/' target="_blank" rel="noopener noreferrer">
                View Repository
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GitHubPosts;
