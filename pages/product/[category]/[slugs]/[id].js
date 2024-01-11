import React,{useState} from 'react';

import { client, urlFor } from '../../../../lib/client';

import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import Trending from '../../../../Components/Trending';

import { useStateContext } from '../../../../context/stateContext'



const Items = ({productItem,altproductItem}) => {

  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty,onAdd,setShowCart} = useStateContext();
  


  const handleBuyNow = (item,qty) => {
    onAdd(item, qty);
    setShowCart(true);
  }

  return (
    <div className='product-detail'>
      
          {
          productItem.map((item)=> 
            <div>
            <div className="product-detail-container" key={item._id}>
              <div>
                <div className="image-container">
                  <img src={urlFor(item.image && item.image[index])} className="product-detail-image" />
                </div>
                <div className="small-images-container">
                  {item.image?.map((item, i) => (
                    <img 
                      key={i}
                      src={urlFor(item)}
                      className={i === index ? 'small-image selected-image' : 'small-image'}
                      onMouseEnter={() => setIndex(i)}
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
                <p className="price"><span>&#8358;</span>{item.price}</p>
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
          
          
                           
        )
      }
    </div>
       
        
  )
  
}



export const getServerSideProps = async (ctx) => {

 
  const {params} = ctx;
  const {slugs,id,category} = params;

  console.log(params)

  console.log(id)


  const query = `*[_type == "products" && slug.current == '${id}' && !(_id in path('drafts.**'))]`;
  const productItem = await client.fetch(query);

  const altquery = `*[_type == "products" && type == '${slugs}' && !(_id in path('drafts.**'))]`;
  const altproductItem = await client.fetch(altquery);

  console.log(productItem,'this is')

  
  return {
    props: {
        productItem,id,slugs,altproductItem
      }
  }
}


export default Items;