import React from 'react';

import styles from '../styles/Nav.module.css';

import Searchbar from '../Components/UI/Searchbar';
import Navigations from './Navigations';

import { AiOutlineShopping } from 'react-icons/ai';
import {TiThMenu} from 'react-icons/ti';

import Link from 'next/link';

import Cart from './Cart';
import { useStateContext } from '../context/StateContext';


const Nav = (props) => {


const {showCart, setShowCart, totalQuantities} = useStateContext();


  return (
    <nav className={styles.navbar}>
        <div className={styles.logo_div}>
            <h2 className={styles.logo}>PlanoiR</h2>
            <span className='desktop_only'>
                <TiThMenu onClick={props.clickedToggle}/>
            </span>
        </div>
        <div className={styles.search_div}>
            <Searchbar />
        </div>
        <nav className='destopOnly'>
            <Navigations/>
        </nav>
        

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