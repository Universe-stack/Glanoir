import React from 'react';
import styles from '../styles/UsersChoice.module.css';

import { urlFor } from '../lib/client';
import { client } from '../lib/client';

import ReactStars from 'react-stars';



const UsersChoice = ({ product: { image, name, rating, price } }) => {
  return (
    <div className={styles.usersChoice} >
    
        <div className="product-card">
        <img 
            src={urlFor(image && image[0])}
            width={200}
            height={200}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
          <ReactStars
            value={rating}
            count={5}
            size={24}
            edit={false}
            half={true}
            color2={'#ffd700'} />
        </div>
    </div>
  )
}



export default UsersChoice