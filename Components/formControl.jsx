import React,{useState} from 'react';

import Script from 'next/script';

import { handlePayment } from '../pages/api/paystackInterface';

import { useStateContext } from '../context/StateContext';
import { Data } from '@react-google-maps/api';

import {useRouter} from 'next/router';



const FormControl = () => {


    const API_KEY = 'sk_test_d85dbe6e699034e945cae96269266bb4b5a634b3';

    const router = useRouter();
    console.log(router.query);

    const reference =router.query.reference;
    console.log(reference);


    async function getResponse() {
        const response = await fetch(
            `https://api.paystack.co/transaction/verify/:${reference}`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${API_KEY}`
                }
            }
        );

        const data = await response.json();
        console.log(data);
    }
    

    const {totalPrice} = useStateContext();

    const [data, setData] = useState({});
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(data)
        handlePayment(data.email, parseFloat(data.amount));
    }

    getResponse()

    const handleChange=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    console.log(data,totalPrice);



const total = {totalPrice}
  return (
    <>
    <Script src="https://js.paystack.co/v1/inline.js"/> 
    <div>
        <h3>Pay with Paystack</h3>
        <form onSubmit={handleSubmit}>
            <div className='input-control'>
                <label>Email</label>
                <input type="email" required name="email" onChange={handleChange}/>
            </div>

            <div className='input-control'>
                <label>Amount</label>
                <input type="number" name="amount" value = {data.amount=totalPrice} onChange={handleChange}/>
            </div>

            <button type="submmit">Submit</button>

        </form>
    </div>
    </>
  )
}

export default FormControl