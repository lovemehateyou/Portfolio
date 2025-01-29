import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import styles from'../styles/nav.module.css'
import ThemeSwitch from './ThemeSwitch.jsx'
import logo from '../assets/alazarlogo.jpg'

function Navbar() {
const [menuOpen,setopenmenu] = useState(false)

const toggleMenu = ()=>{
  setopenmenu(!menuOpen)
}
  return (
    <>
      <header className={styles.header}>
      

       {/* Hamburger Icon for Mobile */}

      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.line} ${menuOpen ? styles.open : ''}`}></div>
        <div className={`${styles.line} ${menuOpen ? styles.open : ''}`}></div>
        <div className={`${styles.line} ${menuOpen ? styles.open : ''}`}></div>
      </div>

      {/* Navigation Links */}

      <div>
        <nav className= {`${styles.Navbar} ${menuOpen ? styles.active : ''}`} >
            <Link to='/' onClick={toggleMenu}>Home</Link>
            <Link to='/projects' onClick={toggleMenu}>Projects</Link>
            <Link to='/about' onClick={toggleMenu}>About</Link>
            <Link to='/contact' onClick={toggleMenu}>ContactMe</Link>
        </nav>
      </div> 

    </header>

    <div className={styles.themeSwitch}>
        <ThemeSwitch />
    </div> 
    </>
    
  )
}

export default Navbar
