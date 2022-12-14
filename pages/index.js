import React,{Component} from 'react'

import Meta from '../Components/Meta';
import Trending from '../Components/Trending';
import MidBanner from '../Components/MidBanner';
import UsersChoice from '../Components/UsersChoice';
import Achievements from '../Components/Achievements';
import Qualities from '../Components/Qualities';
import FormControl from '../Components/formControl';

import {client} from '../lib/client';



//import { Carousel } from 'react-responsive-carousel';


const Home = ({trending, monthlyTrending,usersChoice}) =>{
  return (
    <div >
      <Meta title="Planoir" keywords="e-commerce, fashion, wears, shoes" description="" />
      {console.log(trending)}
      <div className='banner_top'>
          <div className='banner_top_text'>
            <h1>FIND YOUR BEST FITTING..</h1>
          </div>

          <div className='banner_top_text'>
            <h1>FIND YOUR BEST FITTING..</h1>
          </div>    
      </div>

      

      <div className='trending_products'>
      <h2> TRENDING / NEW ARRIVALS</h2>
      <span>
      {trending?.map((product) => <Trending key={product._id} product={product} />)}
      </span>
      </div>

      <div>
        <MidBanner />
      </div>

      
      <div className='marquee'>
        <h2> MONTHLY TRENDIES</h2>
        <div className="maylike-products-container track">
          {monthlyTrending?.map((product) => <UsersChoice key={product._id} product={product}/>)}
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
  const query = '*[_type == "trending"]';
  const trending = await client.fetch(query);

  const monthlyTrendQuery = '*[_type == "monthly-trendies"]';
  const monthlyTrending = await client.fetch(monthlyTrendQuery);

  const userQuery = '*[_type == "users-choice"]';
  const usersChoice = await client.fetch(userQuery);

  return {
    props: {trending,monthlyTrending,usersChoice}
  }
}


export default Home;