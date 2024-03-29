import React,{Component} from 'react';

import Link from 'next/link';

import Meta from '../Components/Meta';
import Trending from '../Components/Trending';
import MidBanner from '../Components/MidBanner';
import UsersChoice from '../Components/UsersChoice';
import Achievements from '../Components/Achievements';
import Qualities from '../Components/Qualities';
import FormControl from '../Components/formControl';

import {client} from '../lib/client';
import Image from 'next/image';

import heropic from '../assets/appleP.png'



//import { Carousel } from 'react-responsive-carousel';


const Home = ({trending, monthlyTrending,usersChoice}) =>{
  return (
    <div >
      <Meta title="Planoir" keywords="e-commerce, fashion, wears, shoes" description="" />
    
      <div className='banner_top'>
          <div className='banner_top-text'>
            <h1>SHOP LIKE NEVER BEFORE</h1>
            <p>Stay updated with the latest trends in the world of fashion. In a world where everyone looks the same, we help you to stay unique with our collection of wears from different luxury brands</p>
            <button className='btn_hero'><Link href={"/product"}> <span>SHOP NOW</span></Link></button>
          </div>

          <div className='banner_top-right'>
            <Image src={heropic}  className='banner_top-img'/>
          </div>    
      </div>

      

      <div className='trending_products'>
      <h2> TRENDING / NEW ARRIVALS</h2>
      <div className='spanDiv'>
      {trending?.map((product) => <Trending key={product._id} product={product} />)}
      </div>
      </div>

      <div>
        <MidBanner />
      </div>

      
      <div className='marquee'>
        <h2> MONTHLY TRENDIES</h2>
        <div className="maylike-products-container track">
          {monthlyTrending?.map((product) => <Trending key={product._id} product={product}/>)}
        </div>
      </div>
      
 
      <div className='Achievements'>
        <Achievements />
      </div>

      <div>
        <Qualities />
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "products" && trending == true]';
  const trending = await client.fetch(query);

  const monthlyTrendQuery = '*[_type == "products" && monthlytrending == true]';
  const monthlyTrending = await client.fetch(monthlyTrendQuery);

  const userQuery = '*[_type == "users-choice"]';
  const usersChoice = await client.fetch(userQuery);

  return {
    props: {trending,monthlyTrending,usersChoice}
  }
}


export default Home;