import React,{useState} from 'react';

import Script from 'next/script';

import { handlePayment } from '../pages/api/paystackInterface';

import { useStateContext } from '../context/StateContext';
import { Data } from '@react-google-maps/api';

import {useRouter} from 'next/router';

import styles from "../styles/Formcontrol.module.css"


import axios from '../axios-orders'

const FormControl = () => {

    const {totalPrice,cartItems} = useStateContext();
    const [data, setData] = useState({});

    const [ radios, setRadios] = useState({})


    const router = useRouter();
    console.log(router.query);

    const reference =router.query.reference;
    console.log(reference);


    const API_KEY = process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY ;

    const nameItem = cartItems.map(d=>d.name);
    const priceItem = cartItems.map(d=>d.price);
    const amountItem = cartItems.map(d=>d.quantity);

    console.log(cartItems);



    function getData(dataa){

        dataa.status && console.log(data.amount,data.email)
        
    }

      reference ?  fetch(
            `https://api.paystack.co/transaction/verify/${reference}`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${API_KEY}`
                }
            }
        )
        .then((response)=> response.json())
        .then((dataa)=> getData(dataa)) : null


    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(data)
        console.log(radios)
        handlePayment(data.email, parseFloat(data.amount), nameItem,priceItem,amountItem);

        console.log(cartItems,data)
        const order ={  
            product:cartItems,
            total: data.amount,
            customer:{
                name: data.name,
                email: data.email,
                address: data.address,

            },
            deliveryMethod:radios.selectedOption
        }

        axios.post('/orders.json',order)
        .then(res=>console.log(res))
        .catch(error => console.log(error))
    }

    

    const handleChange=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    const handleChangeRadio=(e)=>{
        setRadios({
            selectedOption:e.target.value
        })
    }

    console.log(radios.selectedOption);


  return (
    <>
    <Script src="https://js.paystack.co/v1/inline.js"/> 
            <div className='form_background'>
        
        
                <form className={styles.container} onSubmit={handleSubmit}>
                        <div className={styles.containerclose}>&times;</div>
                    
                        <img
                            src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                            alt="image"
                            className={styles.img}
                            />
                        <div className={styles.containertext}>
                            <h2>Ideas and UI components in your <br/>inbox</h2>
                            <input type="text" placeholder="Name"  name="name" onChange={handleChange}/>
                            <input type="email" placeholder="Email address" required name="email" onChange={handleChange}/>
                            <input type="number" placeholder="Amount" name="amount" value = {data.amount=totalPrice} onChange={handleChange}/>
                    
                            <input type="text"  placeholder="Home address" name="address" onChange={handleChange} />
                            
                            
                            <div className={styles.buttons} >
                                <label>
                                <input type="radio" value="express" name="delivery"  onChange={handleChangeRadio} checked={radios.selectedOption === 'express'} /> <div className={styles.middle_div}><h2>Express(2 hrs)</h2> </div><div><h2>1500</h2> </div>
                                </label>
                                <label>
                                <input type="radio" value="1-day" name="delivery" onChange={handleChangeRadio} checked={radios.selectedOption === '1-day'} /> <div className={styles.middle_div}><h2>1-day</h2> </div><div><h2>500</h2> </div>
                                </label>
                                <label>
                                <input type="radio" value="2-days" name="delivery"  onChange={handleChangeRadio} checked={radios.selectedOption === "2-days"} /> <div className={styles.middle_div}><h2>2-days</h2> </div><div><h2>FREE</h2> </div>
                                </label>
                            </div>



                    
                            <button type="submit">CHECKOUT</button>
                            <span>No spams included</span>
                        </div>
                </form>
            </div>
</>


  )

  
}



export const getServerSideProps = async (ctx) => {

    const {query} = ctx;
    const {reference} = query;
  
    //onst query = `*[_type == "products" && form == '${category}' && type == '${slugs}'  ]`;
    //const product = await client.fetch(query);
  
    console.log(reference)
    
  
    return {
      props: { query}
    }
  }

export default FormControl