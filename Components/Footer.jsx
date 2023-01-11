import Link from 'next/link';
import React from 'react'

import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.Footer_container}>
        <div className={styles.social_media}>
          <small>Twitter</small>
          <small>Gram</small>
          <small>Facebook</small>
          <small>Whatsapp</small>
        </div>

        <div className={styles.Footer_inner_start}>
        <div className={styles.Footer_contact}>
            <ul>
                <li>
                    <p> Stay in touch? Sign up now…</p>
                    <input type="text" data-validate="{required:true}" maxLength="12" placeholder="enter your email address" />
                    <button type='submit'>Join</button>
                </li>
            </ul>
        </div>

        <div className= {styles.Footer_links}>
            <ul>
              <h3> CUSTOMER SERVICE</h3>
                <li>
                    <Link href=""> Contact us</Link>
                </li>
                <li>
                    <Link href=""> Contact us</Link>
                </li>
            </ul>

            <ul>
              <h3> USEFUL LINKS</h3>
              <li>
                    <Link href=""> Contact us</Link>
                </li>
                <li>
                    <Link href=""> Contact us</Link>
                </li>
                <li>
                    <Link href=""> Contact us</Link>
                </li>
               
            </ul>

            <ul>
              <h3>CLOTHING</h3>
              <li>
                    <Link href=""> Contact us</Link>
                </li>
                <li>
                    <Link href=""> Contact us</Link>
                </li>
                <li>
                    <Link href=""> Contact us</Link>
                </li>
                <li>
                    <Link href=""> Contact us</Link>
                </li>
            </ul>

            <ul>
              <h3>PLANOIR WORLD</h3>
                <li>
                    <Link href=""> Contact us</Link>
                </li>
                <li>
                    <Link href=""> Contact us</Link>
                </li>
                <li>
                    <Link href=""> Contact us</Link>
                </li>
               
            </ul>
        </div>    
        </div>
        
        <div className={styles.Footer_end}>
          <p> <small>Planoir. 2022, All rights reserved</small></p>
        </div>

    </div>
  )
}

export default Footer;