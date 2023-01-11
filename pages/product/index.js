import React from 'react';

import Link from 'next/link';

import { client, urlFor } from '../../lib/client';



import ReactStars from 'react-stars';




const Index = ( {trending,
    mens_wears_product,
    womens_wears_product,
    mens_footwears_product,
    womens_footwears_product,
    mens_accessories_product,
    womens_accessories_product,
  
    }) => {
  return (
    <div className='shop'>
        <div className='shop_inner'>
        <div className='trending'>
            <div><h2>TRENDING</h2></div>
            
        </div>

        <div className='display_container'>
            <div>
                <h2>MENS CLOTHING</h2>
                <ul>
                    <li><Link href={'#'}>SHIRTS </Link></li>
                    <li><Link href={'#'}>COATS </Link></li>
                    <li><Link href={'#'}>SUITS </Link></li>
                    <li><Link href={'#'}>VESTS</Link></li>
                    <li><Link href={'#'}>TROUSERS</Link></li>
                    <li><Link href={'#'}>UNDIES</Link></li>
                </ul>
            </div>

            <div className='display_container_inner'>
                    {
                    
                    mens_wears_product.map((item)=>(<Link href={`/product/wears/coat/${item.slug.current}`}><div className='product-card'>
                        <img 
                        src={urlFor(item.image && item.image[0])}
                        width={200}
                        height={200}
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
                    </div></Link>))
                }
            </div>
        </div>

        <div className='display_container'>
            <div>
                <h2>WOMENS CLOTHING</h2>
                    <ul>
                        <li><Link href={'#'}>SHIRTS </Link></li>
                        <li><Link href={'#'}>COATS </Link></li>
                        <li><Link href={'#'}>SUITS </Link></li>
                        <li><Link href={'#'}>VESTS</Link></li>
                        <li><Link href={'#'}>TROUSERS</Link></li>
                        <li><Link href={'#'}>SKIRTS</Link></li>
                        <li><Link href={'#'}>LINGERIES</Link></li>
                    </ul>
            </div>

            <div className='display_container_inner'>
                    {
                    
                    womens_wears_product.map((item)=>(<Link href={`/product/${item.form}/${item.type}/${item.slug.current}`}><div className='product-card'>
                        <img 
                        src={urlFor(item.image && item.image[0])}
                        width={200}
                        height={200}
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
                    </div></Link>))
                }
            </div>
        </div>

        <div className='display_container'>
        <div>
                <h2>MENS FOOTWEARS</h2>
                    <ul>
                        <li><Link href={'#'}>SHOES </Link></li>
                        <li><Link href={'#'}>SANDALS </Link></li>
                        <li><Link href={'#'}>BOOTS </Link></li>
                        <li><Link href={'#'}>SNEAKERS</Link></li>
                        <li><Link href={'#'}>SLIPPERS</Link></li>
                        <li><Link href={'#'}>SOCKS</Link></li>
                        <li><Link href={'#'}>OTHERS</Link></li>
                    </ul>
            </div>

            <div className='display_container_inner'>
                    {
                    
                    mens_footwears_product.map((item)=>(<Link href={`/product/${item.form}/${item.type}/${item.slug.current}`}><div className='product-card'>
                        <img 
                        src={urlFor(item.image && item.image[0])}
                        width={200}
                        height={200}
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
                    </div></Link>))
                }
            </div>
        </div>

        <div className='display_container'>
        <div>
                <h2>WOMENS FOOTWEARS</h2>
                    <ul>
                        <li><Link href={'#'}>SHOES </Link></li>
                        <li><Link href={'#'}>SANDALS </Link></li>
                        <li><Link href={'#'}>BOOTS </Link></li>
                        <li><Link href={'#'}>SNEAKERS</Link></li>
                        <li><Link href={'#'}>SLIPPERS</Link></li>
                        <li><Link href={'#'}>SOCKS</Link></li>
                        <li><Link href={'#'}>OTHERS</Link></li>
                    </ul>
            </div>

            
            <div className='display_container_inner'>
                    {
                    
                    womens_footwears_product.map((item)=>(<Link href={`/product/${item.form}/${item.type}/${item.slug.current}`}><div className='product-card'>
                        <img 
                        src={urlFor(item.image && item.image[0])}
                        width={200}
                        height={200}
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
                    </div></Link>))
                }
            </div>
        </div>

        <div className='display_container'>
            <div>
                <h2>MENS ACCESSORIES</h2>
                    <ul>
                        <li><Link href={'#'}> DEODORANTS </Link></li>
                        <li><Link href={'#'}>WATCHES </Link></li>
                        <li><Link href={'#'}>TIE</Link></li>
                        <li><Link href={'#'}>BELTS</Link></li>
                        <li><Link href={'#'}>JEWELRY</Link></li>
                        <li><Link href={'#'}>CAPS</Link></li>
                        <li><Link href={'#'}>EYE GLASSES</Link></li>
                    </ul>
            </div>

                
            <div className='display_container_inner'>
                    {
                    
                    mens_accessories_product.map((item)=>(<Link href={`/product/${item.form}/${item.type}/${item.slug.current}`}><div className='product-card'>
                        <img 
                        src={urlFor(item.image && item.image[0])}
                        width={200}
                        height={200}
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
                    </div></Link>))
                }
            </div>
        </div>

        <div className='display_container'>
            <div>
                <h2>MENS ACCESSORIES</h2>
                    <ul>
                        <li><Link href={'#'}> DEODORANTS </Link></li>
                        <li><Link href={'#'}>WATCHES </Link></li>
                        <li><Link href={'#'}>TIE</Link></li>
                        <li><Link href={'#'}>BELTS</Link></li>
                        <li><Link href={'#'}>JEWELRY</Link></li>
                        <li><Link href={'#'}>CAPS AND HAIRS</Link></li>
                        <li><Link href={'#'}>EYE GLASSES</Link></li>
                        <li><Link href={'#'}>MAKE-UP</Link></li>
                    </ul>
            </div>

            
            <div className='display_container_inner'>
                    {
                    
                    womens_accessories_product.map((item)=>(<Link href={`/product/${item.form}/${item.type}/${item.slug.current}`}><div className='product-card'>
                        <img 
                        src={urlFor(item.image && item.image[0])}
                        width={200}
                        height={200}
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
                    </div></Link>))
                }
            </div>
        </div>
        </div>
    </div>
  )
}


export const getServerSideProps = async (ctx) => {

    const {params} = ctx;
    

    console.log(params);
  
    //trending
    const trendquery = '*[_type == "trending"]';
    const trending = await client.fetch(trendquery);

    //mens wears
    const mens_wears_query = `*[_type == "products" && form == "wears" && sex == "M" ]`;
    const mens_wears_product = await client.fetch(mens_wears_query);

    //female wears
    const womens_wears_query = `*[_type == "products" && form == "wears" && sex == "F" ]`;
    const womens_wears_product = await client.fetch(womens_wears_query);

    //mans footwears
    const mens_footwears_query = `*[_type == "products" && form == "footwears" && sex == "M" ]`;
    const mens_footwears_product = await client.fetch(mens_footwears_query);

    //womens footwears
    const womens_footwears_query = `*[_type == "products" && form == "footwears" && sex == "F" ]`;
    const womens_footwears_product = await client.fetch(womens_footwears_query); 
  
    //mens accessories
    const mens_accessories_query = `*[_type == "products" && form == "accessories" && sex == "M" ]`;
    const mens_accessories_product = await client.fetch(mens_accessories_query);

    //womens accessories
    const womens_accessories_query = `*[_type == "products" && form == "accessories" && sex == "F" ]`;
    const womens_accessories_product = await client.fetch(womens_accessories_query);

    return {
      props: {
        trending,
        mens_wears_product,
        womens_wears_product,
        mens_footwears_product,
        womens_footwears_product,
        mens_accessories_product,
        womens_accessories_product,


        
        }
    }
  }

export default Index