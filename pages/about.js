import React from 'react';

import styles from "../styles/About.module.css";
import Link from 'next/link';

import {AiFillCaretDown} from "react-icons/ai";
import {AiFillCaretUp} from "react-icons/ai";

const about = () => {


  const [drop,setDrop]= React.useState(false);
  const [dropA,setDropA]= React.useState(true);
  const [dropB,setDropB]= React.useState(true);


  console.log(drop);
 

  let attachedClasses=['arrowIcon','arrClose'].join(' ');
  let attachedClassesTwo=['arrowIcon','arrOpen'].join(' ');

  let attachedClassesA=['arrowIcon','arrClose'].join(' ');
  let attachedClassesAA=['arrowIcon','arrOpen'].join(' ');

  let attachedClassesB=['arrowIcon','arrClose'].join(' ');
  let attachedClassesBB=['arrowIcon','arrOpen'].join(' ');


  let attachedClass=["header_dropDown",'arrClose'].join(' ');
  let attachedClassA=["header_dropDown",'arrClose'].join(' ');
  let attachedClassB=["header_dropDown",'arrClose'].join(' ');
  


    
    if(drop){
      attachedClasses=['arrowIcon','arrOpen'].join(' ');
      attachedClassesTwo=['arrowIcon','arrClose'].join(' ');
      attachedClass=["header_dropDown",'arrClose'].join(' ');
    }else{
      attachedClasses=['arrowIcon','arrClose'].join(' ');
      attachedClassesTwo=['arrowIcon','arrOpen'].join(' ');
      attachedClass=["header_dropDown",'arrOpen'].join(' ');
    }

    function toggleOption(e){
      setDrop((prevState)=>prevState = !prevState)
    }

  //
  if(dropA){
    attachedClassesA=['arrowIcon','arrOpen'].join(' ');
    attachedClassesAA=['arrowIcon','arrClose'].join(' ');
    attachedClassA=["header_dropDown",'arrClose'].join(' ');
  }else{
    attachedClassesA=['arrowIcon','arrClose'].join(' ');
    attachedClassesAA=['arrowIcon','arrOpen'].join(' ');
    attachedClassA=["header_dropDown",'arrOpen'].join(' ');
  }
  function toggleOptionA(e){
    setDropA((prevState)=>prevState = !prevState)
  }

  //

  if(dropB){
    attachedClassesB=['arrowIcon','arrOpen'].join(' ');
    attachedClassesBB=['arrowIcon','arrClose'].join(' ');
    attachedClassB=["header_dropDown",'arrClose'].join(' ');
  }else{
    attachedClassesB=['arrowIcon','arrClose'].join(' ');
    attachedClassesBB=['arrowIcon','arrOpen'].join(' ');
    attachedClassB=["header_dropDown",'arrOpen'].join(' ');
  }
  function toggleOptionB(e){
    setDropB((prevState)=>prevState = !prevState)
  }



  return (
    <div className={styles.about_container}>
        <div className={styles.about_inner}>
            <div className={styles.about_hero}>
                <h1>Helping millions <span className={styles.inline_span}>shop better</span></h1>
                <p>From small businesses to Fortune 100 companies, millions of people around
                     the world rely on Calendly to close deals, land candidates,
                     build relationships, and grow their business—faster.
                </p>

                <Link href={'/product'}><span className={styles.btn}> Buy now </span></Link>
            </div>

            <div className={styles.about_hero}>
                <h1>Helping millions<span className={styles.inline_span}> repair</span></h1>
                <p>From small businesses to Fortune 100 companies, millions of people around 
                     the world rely on Calendly to close deals, land candidates, 
                     build relationships, and grow their business—faster.
                </p>

                <span className={styles.btn}> Call us today</span>
            </div>

            <div className={styles.about_hero}>
                <h1>FA<span className={styles.inline_span}>Q</span></h1>


              <div className={styles.faq_section}>
                  <div className={styles.header_mobile}>
                      <div className={styles.about_mobile_inner} onClick={toggleOption}>
                      <div onClick={toggleOption}><h2>How many days delivery?</h2></div>
                      <AiFillCaretDown className={attachedClassesTwo} />
                      <AiFillCaretUp className={attachedClasses} />
                      </div>
                  </div>

                  <div className={attachedClass}>
                    <p>We approximately deliver our products in 3 hours depending on the time of order..</p>
                  </div>
              </div>  

                <div className={styles.faq_section}>
                  <div  className={styles.header_mobile}>
                      <div className={styles.about_mobile_inner} onClick={toggleOptionA}>
                      <div onClick={toggleOptionA}><h2>How much is the delivery fee?</h2></div>
                      <AiFillCaretDown className={attachedClassesAA} />
                      <AiFillCaretUp className={attachedClassesA} />
                      </div>
                  </div>

                  <div className={attachedClassA}>
                    <p>We approximately deliver our products in 3 hours depending on the time of order..</p>
                  </div>
                </div>

                <div className={styles.faq_section}>
                  <div  className={styles.header_mobile}>
                      <div className={styles.about_mobile_inner} onClick={toggleOptionB}>
                      <div onClick={toggleOptionB}><h2>What is your warranty policy?</h2></div>
                      <AiFillCaretDown className={attachedClassesBB} />
                      <AiFillCaretUp className={attachedClassesB} />
                      </div>
                  </div>

                  <div className={attachedClassB}>
                    <p>We approximately deliver our products in 3 hours depending on the time of order..</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default about