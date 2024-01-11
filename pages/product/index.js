import React,{useState} from 'react';

import Link from 'next/link';

import { client, urlFor } from '../../lib/client';



import ReactStars from 'react-stars';




const Index = ( {trending,
    computers_product,
    computer_accessories_product,
    phones_product,
    phone_accessories_product,
    network_devices_product,
    womens_accessories_product,
    
  
    }) => {

        const [btnValue,setbtnValue] = useState('');
        const [wcbtnValue,setwcbtnValue] = useState('');
        const [phbtnValue,setphbtnValue] = useState('');
        const [phabtnValue,setphabtnValue] = useState('');
        const [ndbtnValue,setndbtnValue] = useState('');



        const setBtn=(e)=>{
            e.preventDefault();
            let val = e.target.value;
            setbtnValue(prev=>prev = val);

        }

        const setwcBtn=(e)=>{
            e.preventDefault();
            let val = e.target.value;
            setwcbtnValue(prev=>prev = val)
        }

        const setPhBtn=(e)=>{
            e.preventDefault();
            let val = e.target.value;
            setphbtnValue(prev=>prev = val);
        }
        const setPhaBtn=(e)=>{
            e.preventDefault();
            let val = e.target.value;
            setphabtnValue(prev=>prev = val);
        }

        const setNdBtn=(e)=>{
            e.preventDefault();
            let val = e.target.value;
            setndbtnValue(prev=>prev = val);
        }
        

        let computersProduct = computers_product.filter((item)=> item.type.includes(btnValue) );
        let computerAccessoriesProduct = computer_accessories_product.filter((item)=> item.type.includes(wcbtnValue) );
        let phonesProduct = phones_product.filter((item)=> item.type.includes(phbtnValue) );
        let phoneAccessoriesProduct = phone_accessories_product.filter((item)=> item.type.includes(phabtnValue) );
        let networkDevicesProduct = network_devices_product.filter((item)=> item.type.includes(ndbtnValue) );
        let womensAccessories = womens_accessories_product.filter((item)=> item.type.includes(btnValue) );

  return (

    <div className='shop'>
        <div className='shop_inner'>
        

        <div className='display_container'>
            <div>
                <h2>COMPUTER SYSTEMS</h2>
                <ul>
                    <form>
                        <button type='submit' value="laptop" onClick={setBtn}>LAPTOPS</button>
                        <button type='submit' value="desktop" onClick={setBtn}>DESKTOPS</button>
                        
                    </form>
                </ul>
            </div>

            <div className='display_container_inner'>
                    {
                    btnValue?
                    computersProduct.map((item)=>(<Link href={`/product/${item.form}/${item.type}/${item.slug.current}`}><div className='product-card'>
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

                    computers_product.map((item)=>(<Link href={`/product/${item.form}/${item.type}/${item.slug.current}`}><div className='product-card'>
                    <img 
                    src={urlFor(item.image && item.image[0])}
                    width={200}
                    height={200}
                    className="product-image"
                    />
                    <p className="product-name">{item.name}</p>
                    <p className="product-price"><span>&#8358;</span>{item.price}</p>
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
                <h2>COMPUTER ACCESSORIES</h2>
                    <ul>
                        <form>
                            <button type='submit' value="charger" onClick={setwcBtn}>CHARGERS</button>
                            <button type='submit' value="microphone" onClick={setwcBtn}>MICROPHONES</button>
                            
                        </form>
                    </ul>
            </div>

            <div className='display_container_inner'>
                    {
                         wcbtnValue?
                         computerAccessoriesProduct.map((item)=>(<Link href={`/product/${item.form}/${item.type}/${item.slug.current}`}><div className='product-card'>
                             <img 
                             src={urlFor(item.image && item.image[0])}
                             width={200}
                             height={200}
                             className="product-image"
                         />
                         <p className="product-name">{item.name}</p>
                         <p className="product-price"><span>&#8358;</span>{item.price}</p>
                         <ReactStars
                         value={item.rating}
                         count={5}
                         size={24}
                         edit={false}
                         half={true}
                         color2={'#ffd700'} />
                         </div></Link>)) :
                    
                    computer_accessories_product.map((item)=>(<Link href={`/product/${item.form}/${item.type}/${item.slug.current}`}><div className='product-card'>
                        <img 
                        src={urlFor(item.image && item.image[0])}
                        width={200}
                        height={200}
                        className="product-image"
                    />
                    <p className="product-name">{item.name}</p>
                    <p className="product-price"><span>&#8358;</span>{item.price}</p>
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
                <h2>PHONES</h2>
                    <ul>
                        <form>
                            <button type='submit' value="android" onClick={setPhBtn}>ANDROIDS</button>
                            <button type='submit' value="iphone" onClick={setPhBtn}>IPHONES</button>
                            
                        </form>
                    </ul>
            </div>

            <div className='display_container_inner'>
                    {
                   
                   phbtnValue?
                   phonesProduct.map((item)=>(<Link href={`/product/${item.form}/${item.type}/${item.slug.current}`}><div className='product-card'>
                       <img 
                       src={urlFor(item.image && item.image[0])}
                       width={200}
                       height={200}
                       className="product-image"
                   />
                   <p className="product-name">{item.name}</p>
                   <p className="product-price"><span>&#8358;</span>{item.price}</p>
                   <ReactStars
                   value={item.rating}
                   count={5}
                   size={24}
                   edit={false}
                   half={true}
                   color2={'#ffd700'} />
                   </div></Link>)) :

                    phones_product.map((item)=>(<Link href={`/product/${item.form}/${item.type}/${item.slug.current}`}><div className='product-card'>
                        <img 
                        src={urlFor(item.image && item.image[0])}
                        width={200}
                        height={200}
                        className="product-image"
                    />
                    <p className="product-name">{item.name}</p>
                    <p className="product-price"><span>&#8358;</span>{item.price}</p>
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
                <h2>PHONES ACCESSORIES</h2>
                    <ul>
                        <form>
                            <button type='submit' value="charger" onClick={setPhaBtn}>CHARGERS</button>
                            <button type='submit' value="powerbank" onClick={setPhaBtn}>POWERBANKS</button>
                            
                    </form>
                    </ul>
            </div>

            
            <div className='display_container_inner'>
                    {
                    
                    phabtnValue?
                    phoneAccessoriesProduct.map((item)=>(<Link href={`/product/${item.form}/${item.type}/${item.slug.current}`}><div className='product-card'>
                        <img 
                        src={urlFor(item.image && item.image[0])}
                        width={200}
                        height={200}
                        className="product-image"
                    />
                    <p className="product-name">{item.name}</p>
                    <p className="product-price"><span>&#8358;</span>{item.price}</p>
                    <ReactStars
                    value={item.rating}
                    count={5}
                    size={24}
                    edit={false}
                    half={true}
                    color2={'#ffd700'} />
                    </div></Link>)) :
                     
                    phone_accessories_product.map((item)=>(<Link href={`/product/${item.form}/${item.type}/${item.slug.current}`}><div className='product-card'>
                        <img 
                        src={urlFor(item.image && item.image[0])}
                        width={200}
                        height={200}
                        className="product-image"
                    />
                    <p className="product-name">{item.name}</p>
                    <p className="product-price"><span>&#8358;</span>{item.price}</p>
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
                <h2>NETWORK DEVICES</h2>
                    <ul>
                        <form>
                            <button type='submit' value="mifi" onClick={setNdBtn}>MIFIS</button>
                            <button type='submit' value="router" onClick={setNdBtn}>ROUTERS</button>
                            
                        </form>
                    </ul>
            </div>

                
            <div className='display_container_inner'>
                    {
                     ndbtnValue?
                     networkDevicesProduct.map((item)=>(<Link href={`/product/${item.form}/${item.type}/${item.slug.current}`}><div className='product-card'>
                         <img 
                         src={urlFor(item.image && item.image[0])}
                         width={200}
                         height={200}
                         className="product-image"
                     />
                     <p className="product-name">{item.name}</p>
                     <p className="product-price"><span>&#8358;</span>{item.price}</p>
                     <ReactStars
                     value={item.rating}
                     count={5}
                     size={24}
                     edit={false}
                     half={true}
                     color2={'#ffd700'} />
                     </div></Link>)) :    
                    
                    network_devices_product.map((item)=>(<Link href={`/product/${item.form}/${item.type}/${item.slug.current}`}><div className='product-card'>
                        <img 
                        src={urlFor(item.image && item.image[0])}
                        width={200}
                        height={200}
                        className="product-image"
                    />
                    <p className="product-name">{item.name}</p>
                    <p className="product-price"><span>&#8358;</span>{item.price}</p>
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
                <h2> GENERAL TECH APPLIANCES</h2>
                    <ul>
                        <form>
                            <button type='submit' value="shirt" onClick={setBtn}>TELEVISIONS</button>
                            <button type='submit' value="polo" onClick={setBtn}>SPEAKERS</button>
                            
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
                    <p className="product-price"><span>&#8358;</span>{item.price}</p>
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

    //computers wears
    const computers_query = `*[_type == "products" && form == "computers" && !(_id in path('drafts.**')) ]`;
    const computers_product = await client.fetch(computers_query);

    //computer accessories
    const computer_accessories_query = `*[_type == "products" && form == "computerAccessories" && !(_id in path('drafts.**')) ]`;
    const computer_accessories_product = await client.fetch(computer_accessories_query);

    //phones
    const phones_product_query = `*[_type == "products" && form == "phones" && !(_id in path('drafts.**')) ]`;
    const phones_product = await client.fetch(phones_product_query);

    //phone accessories
    const phone_accessories_query = `*[_type == "products" && form == "phoneAccessories" && !(_id in path('drafts.**'))]`;
    const phone_accessories_product = await client.fetch(phone_accessories_query); 
  
    //network devices
    const network_devices_query = `*[_type == "products" && form == "networkDevices" && !(_id in path('drafts.**'))]`;
    const network_devices_product = await client.fetch(network_devices_query);

    //general tech appliences
    const womens_accessories_query = `*[_type == "products" && form == "accessories" && sex == "F"  && !(_id in path('drafts.**')) ]`;
    const womens_accessories_product = await client.fetch(womens_accessories_query);

    return {
      props: {
        trending,
        computers_product,
        computer_accessories_product,
        phones_product,
        phone_accessories_product,
        network_devices_product,
        womens_accessories_product,
        
        }
    }
  }

export default Index