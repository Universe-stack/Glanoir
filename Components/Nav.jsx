import React from 'react';

import styles from '../styles/Nav.module.css';

import Searchbar from './UI/Searchbar';

import { AiOutlineShopping } from 'react-icons/ai';

import Link from 'next/link';

import Cart from './Cart';
import { useStateContext } from '../context/StateContext';


const Nav = () => {


const {showCart, setShowCart, totalQuantities} = useStateContext();


  return (
    <nav className={styles.navbar}>
        <div className={styles.logo_div}>
            <h2 className={styles.logo}>PlanoiR</h2>
        </div>
        <div className={styles.search_div}>
            <Searchbar />
        </div>
        
        <div className={styles.navbar_links}>
            <ul>
                <li><Link href={`/`}><h2>HOME</h2></Link></li>
                <li><Link href={`/product`}><h2>SHOP</h2></Link></li>
                <li><Link href={`#`}><h2>FAQ</h2></Link></li>
            </ul>
        </div>

        <button type='button' className='cart-icon' onClick={()=>setShowCart(true)}>
            <AiOutlineShopping />
            <spam className="cart-item-qty">{totalQuantities}</spam>
        </button>

        {
            showCart && <Cart />
        }   
       
    </nav>
  )
}

export default Nav;