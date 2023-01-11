import React,{useState} from 'react'

import styles from '../styles/Nav.module.css';

import Link from 'next/link';



const Header = () => {


  return (
    <div className={styles.header}>
        <ul>
            <li><Link  href={`/product/wears/polo`}><h3>Polos</h3></Link></li>
            <li><Link  href={`/product/footwears/shoe`}><h3>Shoes</h3></Link></li>
            <li><Link  href={`/product/wears/dress`}><h3>Dresses</h3></Link></li>
            <li><Link  href={`/product/wears/lingerie`}><h3>Lingeries</h3></Link></li>
            <li><Link  href={`/product/wears/shirt`}><h3>Shirts</h3></Link></li>
        </ul>
    </div>
  )
}

export default Header;