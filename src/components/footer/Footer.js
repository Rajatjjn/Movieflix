import React from 'react'
import style from "./Footer.module.css"

export default function Footer() {
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
                <li><a href="#">Netflix Originals</a></li>
            </ul>
        </div>
        
            <p>Netflix India @india2023</p>
          
       
    </footer>
    </div>
    </>
  )
}
