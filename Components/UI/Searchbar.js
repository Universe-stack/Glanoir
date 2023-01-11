import React from 'react'

import styles from '../../styles/Nav.module.css';

import { BsSearch} from 'react-icons/bs';

const Searchbar = () => {
  return (
    <div className={styles.searchbar}>
        <input type="text" value=""  placeholder="search products with exact name"/>
        <button type='submit'> <BsSearch/></button>
    </div>
  )
}

export default Searchbar;