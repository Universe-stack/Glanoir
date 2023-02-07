import React from 'react'

import { client } from '../../../lib/client'

import Trending from '../../../Components/Trending'


const searchResults = ({products, id}) => {
  
  return (
    <div className='searchResults'>
        <div className='searchResults_div'>
              {
              products.filter((item)=> {
                return id.toLowerCase() === ""
                  ? console.log('not found')
                  : item.form.toLowerCase().includes(id.toLowerCase()) || item.name.toLowerCase().includes(id.toLowerCase()) || item.brand.toLowerCase().includes(id.toLowerCase()) || item.form.toLowerCase().includes(id.toLowerCase());
              })
              .map((item)=> <Trending product={item} />
              )
            }
        </div>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {

  const {params} = ctx;
  const {id} = params;

  console.log(id)

  const productquery = `*[_type == "products" && !(_id in path('drafts.**'))]`;
  const products = await client.fetch(productquery);


  return {
    props: {products,id}
  }
}


export default searchResults