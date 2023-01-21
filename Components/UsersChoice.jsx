import React from 'react';
import styles from '../styles/UsersChoice.module.css';

import { urlFor } from '../lib/client';
import { client } from '../lib/client';

import ReactStars from 'react-stars';

import Trending from './Trending';

import Link from 'next/link';



const UsersChoice = ({ product }) => {
  return (
    <div className={styles.usersChoice} >
      <Trending product={product} />
    </div>
  )
}



export default UsersChoice