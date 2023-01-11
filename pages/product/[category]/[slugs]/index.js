import React,{useState} from 'react';
import Link from 'next/link';

import { client, urlFor } from '../../../../lib/client';


import ReactStars from 'react-stars';

const Items = ({product,slugs,category}) => {

  return (
    <div className='slug_container'>
    <div className='slug_container_main'>
        {
            product.length ? product.map((item)=>(<Link href={`/product/${category}/${slugs}/${item.slug.current}`}><div className='product-card'>
               <img 
              src={urlFor(item.image && item.image[0])}
             
              className="product-image"
            />
            <p className="product-name">{item.name}</p>
            <p className="product-price">${item.price}</p>
            <ReactStars
              value={item.rating}
              count={5}
              size={24}
              edit={false}
              half={true}
              color2={'#ffd700'} />
              </div></Link>)) : <h2> Nothing to show</h2>
        }
    </div>
       
        
    </div>
  )
}

export const getServerSideProps = async (ctx) => {

  const {params} = ctx;
  const {slugs,category,} = params;

  const query = `*[_type == "products" && form == '${category}' && type == '${slugs}'  ]`;
  const product = await client.fetch(query);

  console.log(product)
  

  return {
    props: {
        product,slugs,category}
  }
}


export default Items