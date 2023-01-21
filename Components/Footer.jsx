import Link from 'next/link';
import React,{useState}from 'react'

import styles from '../styles/Footer.module.css';

import { FaFacebook } from "react-icons/fa";
import {FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWhatsappSquare} from "react-icons/fa";

const Footer = () => {

    const [data,setData] = useState({});
    console.log(data);
  
    const formHandler=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    } 


    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(data);
    
    }

    


  return (
    <div className={styles.Footer_container}>
        <div className={styles.social_media}>
          <small><FaFacebook/></small>
          <small><FaInstagram/> </small>
          <small> <FaTwitterSquare/> </small>
          <small> <FaWhatsappSquare/> </small>
        </div>

        <div className={styles.Footer_inner_start}>
        <div className={styles.Footer_contact}>
            <ul>
                <li>
                    <p> Stay in touch? Sign up now…</p>
                    <input type="text" data-validate="{required:true}" placeholder="enter your email address" onChange={formHandler}/>
                    <button type='submit' onClick={handleSubmit}>Join</button>
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