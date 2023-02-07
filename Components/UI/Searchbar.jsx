import React,{useState} from 'react'

import styles from '../../styles/Nav.module.css';

import Link from 'next/link';

import { BsSearch} from 'react-icons/bs';
import { useRouter } from 'next/router';

const Searchbar = () => {
  const router = useRouter()

  const [search,setSearch] = useState(''); 

  const handleLaunch =(e)=>{
    let key = e.keyCode;
    if (key == 13){
      router.push(`/product/searchResults/${search}`)
    }
  
  }

  return (
    <div className={styles.searchbar}>
      
        <input type="text"  onKeyDown={handleLaunch}  onChange={(e)=> setSearch(e.target.value)} placeholder="search products with exact name"/>
        <button type='submit'><Link href={`/product/searchResults/${search}`}><BsSearch/></Link></button>
       
    </div>
  )
}


export default Searchbar;