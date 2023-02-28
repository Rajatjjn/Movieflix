import React from 'react'
import style from "./Footer.module.css"
import { FiFacebook ,FiYoutube,FiTwitter,FiLinkedin } from "react-icons/fi";

export default function Footer() {
    const Link = [
        {
            icon : <FiFacebook/>,
            url : 'https://www.facebook.com'
        },
        {
            icon : <FiYoutube/>,
            url : 'https://www.youtube.com'
        },
        {
            icon : <FiTwitter/>,
            url : 'https://www.twitter.com'
        },
        {
            icon : <FiLinkedin/>,
            url : 'https://www.linkdIn.com'
        },
        
        

    ]

  return (
    <>
    
    <div className={style.main}>
       <footer class={style.footer}>
        <p>Questions? Call 000-800-040-1843</p>
        <div class={style.footerCols}>
            <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Speed Test</a></li>
            </ul>
            <ul>
                <li><a href="#">Help Centre</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Cookie Preferences</a></li>
                <li><a href="#">Watch for Free</a></li>
            </ul>
            <ul>
                <li><a href="#">Account</a></li>
                <li><a href="#">Ways to Watch</a></li>
                <li><a href="#">Corporate Information</a></li>
                <li><a href="#">Legal Notices</a></li>
            </ul>
            <ul>
                <li><a href="#">Media Centre</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Movieflix Originals</a></li>
            </ul>
        </div>
        
            <p>Movieflix India @india2023</p>{" "}
            <div className={style.wrapper}>

{
    Link.map(({ icon,url},index )=> (
        <a href = {url} target = '_blank' >
            <p className = {style.icon}>
                {icon}
            </p> 
        </a>
    ))
}

</div>
          
       
    </footer>
    </div>
    </>
  )
}
