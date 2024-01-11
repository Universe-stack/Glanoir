import React from 'react'
import Link from 'next/link';

import { urlFor } from '../lib/client';

import styles from "../styles/Trending.module.css";

import ReactStars from 'react-stars';




const Trending = ({ product}) => {
    
    const ratingChanged = (newRating) => {
        console.log(newRating)
    }
   
  return (
    <div className={styles.container}>
        {
            console.log(ratingChanged)
        }
        <Link href={`/product/${product.form}/${product.type}/${product.slug.current}`}>
          <div className="product-card">
            <img 
              src={urlFor(product.image && product.image[0])}
              width={250}
              height={250}
              className="product-image"
            />
            <p className="product-name">{product.name}</p>
            <p className="product-price"><span>&#8358;</span>{product.price}</p>
            <ReactStars
              value={product.rating}
              count={5}
              size={24}
              edit={false}
              half={true}
              color2={'#ffd700'} />
          </div>
        </Link>
      
    </div>
  )
}

export default Trending;