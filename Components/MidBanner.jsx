import React from 'react'

import styles from '../styles/Midbanner.module.css';

const MidBanner = () => {
  return (
    <div className={styles.MidBanner}>
        <img src='/img1.jpg' alt='' className={styles.image} />
        <div className={styles.MidBanner_text}>
          <h2> THE FIRST BANNER</h2>
          <p> lorem15 caiun manr naksne lokior, lorem15 caiun manr naksne lokiorlorem15 caiun manr naksne lokior lorem15 caiun manr naksne lokior,lorem15 caiun manr naksne lokior</p>
          <button type='submit'> SHOP NOW</button>
        </div>
    </div>
  )
}

export default MidBanner