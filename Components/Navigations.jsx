import React from 'react'
import Link from 'next/link';

import styles from '../styles/Nav.module.css';

const Navigations = () => {
  return (
        <div className={styles.navbar_links}>
            <ul>
                <li><Link href={`/`}><h2>HOME</h2></Link></li>
                <li><Link href={`/product`}><h2>SHOP</h2></Link></li>
                <li><Link href={`/about`}><h2>ABOUT</h2></Link></li>
                <li><Link href={`#`}><h2>CALL OUR ENGINEERS</h2></Link></li>
            </ul>
        </div>

  )
}

export default Navigations;