import React,{useState} from 'react';

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

        const [btnValue,setbtnValue] = useState('');
        const [wcbtnValue,setwcbtnValue] = useState('');


        const setBtn=(e)=>{
            e.preventDefault();
            let val = e.target.value;
            setbtnValue(prev=>prev = val)
        }

        const setwcBtn=(e)=>{
            e.preventDefault();
            let val = e.target.value;
            setwcbtnValue(prev=>prev = val)
        }

        let mensProduct = mens_wears_product.filter((item)=> item.type.includes(btnValue) );
        let womensProduct = womens_wears_product.filter((item)=> item.type.includes(btnValue) );
        let womensFootwearsProduct = womens_footwears_product.filter((item)=> item.type.includes(btnValue) );
        let mensFootwearsProduct = mens_footwears_product.filter((item)=> item.type.includes(btnValue) );
        let mensAccessories = mens_accessories_product.filter((item)=> item.type.includes(btnValue) );
        let womensAccessories = womens_accessories_product.filter((item)=> item.type.includes(btnValue) );

  return (

    <div className='shop'>
        <div className='shop_inner'>
        

        <div className='display_container'>
            <div>
                <h2>MENS CLOTHING</h2>
                <ul>
                    <form>
                        <button type='submit' value="shirt" onClick={setBtn}>SHIRTS</button>
                        <button type='submit' value="polo" onClick={setBtn}>POLOS</button>
                        
                    </form>
                </ul>
            </div>

            <div className='display_container_inner'>
                    {
                    btnValue?
                    mensProduct.map((item)=>(<Link href={`/product/${item.form}/${item.type}/${item.slug.current}`}><div className='product-card'>
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
                    </div></Link>)) :

                    mens_wears_product.map((item)=>(<Link href={`/product/${item.form}/${item.type}/${item.slug.current}`}><div className='product-card'>
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
                        <form>
                            <button type='submit' value="shirt" onClick={setwcBtn}>SHIRTS</button>
                            <button type='submit' value="polo" onClick={setwcBtn}>POLOS</button>
                            
                        </form>
                    </ul>
            </div>

            <div className='display_container_inner'>
                    {
                         wcbtnValue?
                         womensProduct.map((item)=>(<Link href={`/product/${item.form}/${item.type}/${item.slug.current}`}><div className='product-card'>
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
                         </div></Link>)) :
                    
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
                        <form>
                            <button type='submit' value="shirt" onClick={setBtn}>SHIRTS</button>
                            <button type='submit' value="polo" onClick={setBtn}>POLOS</button>
                            
                        </form>
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
                        <form>
                            <button type='submit' value="shirt" onClick={setBtn}>SHIRTS</button>
                            <button type='submit' value="polo" onClick={setBtn}>POLOS</button>
                            
                    </form>
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
                <h2>WOMENS ACCESSORIES</h2>
                    <ul>
                        <form>
                            <button type='submit' value="shirt" onClick={setBtn}>SHIRTS</button>
                            <button type='submit' value="polo" onClick={setBtn}>POLOS</button>
                            
                        </form>
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
                        <form>
                            <button type='submit' value="shirt" onClick={setBtn}>SHIRTS</button>
                            <button type='submit' value="polo" onClick={setBtn}>POLOS</button>
                            
                        </form>
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
    const mens_wears_query = `*[_type == "products" && form == "wears" && sex == "M"  && !(_id in path('drafts.**')) ]`;
    const mens_wears_product = await client.fetch(mens_wears_query);

    //female wears
    const womens_wears_query = `*[_type == "products" && form == "wears" && sex == "F"  && !(_id in path('drafts.**')) ]`;
    const womens_wears_product = await client.fetch(womens_wears_query);

    //mans footwears
    const mens_footwears_query = `*[_type == "products" && form == "footwears" && sex == "M"  && !(_id in path('drafts.**')) ]`;
    const mens_footwears_product = await client.fetch(mens_footwears_query);

    //womens footwears
    const womens_footwears_query = `*[_type == "products" && form == "footwears" && sex == "F"  && !(_id in path('drafts.**'))]`;
    const womens_footwears_product = await client.fetch(womens_footwears_query); 
  
    //mens accessories
    const mens_accessories_query = `*[_type == "products" && form == "accessories" && sex == "M"  && !(_id in path('drafts.**'))]`;
    const mens_accessories_product = await client.fetch(mens_accessories_query);

    //womens accessories
    const womens_accessories_query = `*[_type == "products" && form == "accessories" && sex == "F"  && !(_id in path('drafts.**')) ]`;
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