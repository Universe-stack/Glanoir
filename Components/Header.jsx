import React,{useState} from 'react'

import styles from '../styles/Nav.module.css';

import Link from 'next/link';
import {AiFillCaretDown} from "react-icons/ai";
import {AiFillCaretUp} from "react-icons/ai";
import {BsFillArrowDownSquareFill} from "react-icons/bs";
import {BiArrowFromTop, BiArrowToBottom} from "react-icons/bi"
import {BiArrowToTop} from "react-icons/bi"



const Header = () => {

  const [drop,setDrop]= React.useState(false);


  console.log(drop);

  function toggleOption(){
    setDrop((prevState)=>prevState = !prevState)
  }

  /*const handleChange=()=>{
    if(!drop){
      let arrow = document.getElementById('arrow');
      arrow.innerHTML=` <BiArrowToBottom id="arrow" className={attachedClasses} />`;
      setDrop(prev=>prev=true)
      }else{
        let arrow = document.getElementById('arrow');
        arrow.innerHTML=` <BiArrowToTop id="arrow" className={attachedClasses} />`;
        setDrop(prev=>prev=false)
    }

  } */


  let attachedClasses=['arrowIcon','arrClose'].join(' ');
  let attachedClassesTwo=['arrowIcon','arrOpen'].join(' ');
  let attachedClass=["header_dropDown",'arrClose'].join(' ');
    
    if(!drop){
      attachedClasses=['arrowIcon','arrOpen'].join(' ');
      attachedClassesTwo=['arrowIcon','arrClose'].join(' ');
      attachedClass=["header_dropDown",'arrClose'].join(' ');
    }else{
      attachedClasses=['arrowIcon','arrClose'].join(' ');
      attachedClassesTwo=['arrowIcon','arrOpen'].join(' ');
      attachedClass=["header_dropDown",'arrOpen'].join(' ');
    }

    
    
  return (
    <>
     <div className="arrClose">
        <ul>
            <li><Link  href={`/product/wears/polo`}><h3>Polos</h3></Link></li>
            <li><Link  href={`/product/footwears/shoe`}><h3>Shoes</h3></Link></li>
            <li><Link  href={`/product/wears/dress`}><h3>Dresses</h3></Link></li>
            <li><Link  href={`/product/wears/lingerie`}><h3>Lingeries</h3></Link></li>
            <li><Link  href={`/product/wears/shirt`}><h3>Shirts</h3></Link></li>
        </ul>
    </div>

    <div onClick={toggleOption} className={styles.header_mobile}>
      <div className={styles.header_mobile_inner}>
      <div> Select Category</div>
      <BiArrowToBottom className={attachedClasses} />
      <BiArrowToTop className={attachedClassesTwo} />
      </div>
    </div>
    <div className={attachedClass}>
      <ul>
              <li><Link  href={`/product/wears/polo`}><h3>Polos</h3></Link></li>
              <li><Link  href={`/product/footwears/shoe`}><h3>Shoes</h3></Link></li>
              <li><Link  href={`/product/wears/dress`}><h3>Dresses</h3></Link></li>
              <li><Link  href={`/product/wears/lingerie`}><h3>Lingeries</h3></Link></li>
              <li><Link  href={`/product/wears/shirt`}><h3>Shirts</h3></Link></li>
          </ul>
    </div>

    
    </>
  )
   
}

export default Header;