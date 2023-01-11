import React from 'react'

import styles from '../styles/Qualities.module.css';

const Qualities = () => {
  return (
    <div className={styles.Qualities_container}>
        <div className={styles.Qualities_inner}>
            <ul>
                <li>
                    <h3> Global Curves</h3>
                    <p>City Chic is an internationally recognised brand with over 200 global locations</p>
                </li>

                <li>
                    <h3> Endless selection</h3>
                    <p>With new stock arriving weekly, you'll always be able to find the perfect outfit for any occasion </p>
                </li>

                <li>
                    <h3> Cut for Legs</h3>
                    <p>Nobody knows how to cut for your curves like City Chic does! Our styles help you conceal and reveal in all the right places</p>
                </li>

                <li>
                    <h3> Fit guarantee</h3>
                    <p>If your item doesn’t fit or you’re just not happy with it - simply send your order back with all tags fully intact and we'll issue you a full refund</p>
                </li>

                <li>
                    <h3> Free Shipping Over $100</h3>
                    <p> Indulge in risk-free online shopping with free standard shipping for all orders over $100 </p>
                </li>

                <li>
                    <h3>Happy returns </h3>
                    <p>Indulge in risk-free online shopping with free returns on all US orders through our Happy Returns partnership. </p>
                </li>

            </ul>
        </div>

    </div>
  )
}   

export default Qualities;