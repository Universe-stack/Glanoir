import React,{useState} from 'react';
import Link from 'next/link';

import { client, urlFor } from '../../../../lib/client';

import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import ReactStars from 'react-stars';
import Trending from '../../../../Components/Trending';

import { useStateContext } from '../../../../context/StateContext';



const Items = ({productItem,slugs,altproductItem, trend_altproductItem,trend_productItem,category,id,  monthlyTrend_productItem, monthlyTrend_altproductItem}) => {


  const { decQty, incQty, qty,onAdd,setShowCart} = useStateContext();
  
  const handleBuyNow = (item,qty) => {
    onAdd(item, qty);
    setShowCart(true);
  }

  return (
    <div className='product-detail'>
      
          {
          productItem.map((item)=>
          (
            <div>
            <div className="product-detail-container">
              <div>
                <div className="image-container">
                  <img src={urlFor(item.image && item.image[0])} className="product-detail-image" />
                </div>
                <div className="small-images-container">
                  {item.image?.map((item, i) => (
                    <img 
                      key={i}
                      src={urlFor(item)}
                      className={ 'small-image'}
                      onMouseEnter={""}
                    />
                  ))}
                </div>
              </div>
      
              <div className="product-detail-desc">
                <h1>{item.name}</h1>
                <div className="reviews">
                  <div>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </div>
                  <p>
                    (20)
                  </p>
                </div>
                <h4>Details: </h4>
                <p>{item.details}</p>
                <p className="price">${item.price}</p>
                <div className="quantity">
                  <h3>Quantity:</h3>
                  <p className="quantity-desc">
                    <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
                    <span className="num">{qty}</span>
                    <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
                  </p>
                </div>
                
                <div className="buttons">
                  <button type="button" className="add-to-cart" onClick={()=>onAdd(item,qty)}>Add to Cart</button>
                  <button type="button" className="buy-now" onClick={()=>handleBuyNow(item,qty)}>Buy Now</button>
                </div>
              </div>
            </div>
      
            <div className="maylike-products-wrapper">
                <h2>You may also like</h2>
                <div className="marquee">
                  <div className="maylike-products-container track">
                  
                    
                    {
                        altproductItem.map((item)=>(
  
                            <Trending product={item} />
  
                        ))
                    }
                    
                  </div>
                </div>
            </div>
          </div>
          
          
        ))
      }


       {
          trend_productItem.map((item)=>
          (
            <div>
            <div className="product-detail-container">
              <div>
                <div className="image-container">
                  <img src={urlFor(item.image && item.image[0])} className="product-detail-image" />
                </div>
                <div className="small-images-container">
                  {item.image?.map((item, i) => (
                    <img 
                      key={i}
                      src={urlFor(item)}
                      className={ 'small-image'}
                      onMouseEnter={""}
                    />
                  ))}
                </div>
              </div>
      
              <div className="product-detail-desc">
                <h1>{item.name}</h1>
                <div className="reviews">
                  <div>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </div>
                  <p>
                    (20)
                  </p>
                </div>
                <h4>Details: </h4>
                <p>{item.details}</p>
                <p className="price">${item.price}</p>
                <div className="quantity">
                  <h3>Quantity:</h3>
                  <p className="quantity-desc">
                    <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
                    <span className="num">{qty}</span>
                    <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
                  </p>
                </div>
                <div className="buttons">
                  <button type="button" className="add-to-cart" onClick={()=>onAdd(item,qty)}>Add to Cart</button>
                  <button type="button" className="buy-now" onClick={()=>handleBuyNow(item,qty)}>Buy Now</button>
                </div>
              </div>
            </div>
      
            <div className="maylike-products-wrapper">
                <h2>You may also like</h2>
                <div className="marquee">
                  <div className="maylike-products-container track">
                  
                    {
                      trend_altproductItem.map((aitem)=>(

                          <Trending product={aitem} />

                      ))
                    }
                  </div>
                </div>
            </div>
          </div>
          
          
          ))
        }


        
       {
          monthlyTrend_productItem.map((item)=>
          (
            <div>
            <div className="product-detail-container">
              <div>
                <div className="image-container">
                  <img src={urlFor(item.image && item.image[0])} className="product-detail-image" />
                </div>
                <div className="small-images-container">
                  {item.image?.map((item, i) => (
                    <img 
                      key={i}
                      src={urlFor(item)}
                      className={ 'small-image'}
                      onMouseEnter={""}
                    />
                  ))}
                </div>
              </div>
      
              <div className="product-detail-desc">
                <h1>{item.name}</h1>
                <div className="reviews">
                  <div>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </div>
                  <p>
                    (20)
                  </p>
                </div>
                <h4>Details: </h4>
                <p>{item.details}</p>
                <p className="price">${item.price}</p>
                <div className="quantity">
                  <h3>Quantity:</h3>
                  <p className="quantity-desc">
                    <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
                    <span className="num">{qty}</span>
                    <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
                  </p>
                </div>
                <div className="buttons">
                  <button type="button" className="add-to-cart" onClick={()=>onAdd(item,qty)}>Add to Cart</button>
                  <button type="button" className="buy-now" onClick={()=>handleBuyNow(item,qty)}>Buy Now</button>
                </div>
              </div>
            </div>
      
            <div className="maylike-products-wrapper">
                <h2>You may also like</h2>
                <div className="marquee">
                  <div className="maylike-products-container track">
                  
                    {
                      monthlyTrend_altproductItem.map((aitem)=>(

                          <Trending product={aitem} />

                      ))
                    }
                  </div>
                </div>
            </div>
          </div>
          
          
          ))
        }


        
    
    </div>
       
        
  )
  
}



export const getServerSideProps = async (ctx) => {

 
  const {params} = ctx;
  const {slugs,id,category} = params;

  console.log(params)

  console.log(id)


  const query = `*[_type == "products" && slug.current == '${id}']`;
  const productItem = await client.fetch(query);

  const altquery = `*[_type == "products" && type == '${slugs}']`;
  const altproductItem = await client.fetch(altquery);

  const trend_query = `*[_type == "trending" && slug.current == '${id}']`;
  const trend_productItem = await client.fetch(trend_query);

  const trend_altquery = `*[_type == "trending" && type == '${slugs}']`;
  const trend_altproductItem = await client.fetch(trend_altquery);

  const monthlyTrend_query = `*[_type == "monthly-trendies" && slug.current == '${id}']`;
  const monthlyTrend_productItem = await client.fetch(monthlyTrend_query);

  const monthlyTrend_altquery = `*[_type == "monthly-trendies" && type == '${slugs}']`;
  const monthlyTrend_altproductItem = await client.fetch(monthlyTrend_altquery);
   

  return {
    props: {
        productItem,id,slugs,altproductItem,trend_altproductItem,trend_productItem,category, monthlyTrend_productItem, monthlyTrend_altproductItem}
  }
}


export default Items;