import React from 'react'
import styles from '../styles/Layout.module.css';

import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';

const Layout=({children}) => {
  return (
    <>
        <Nav />
        <Header />
       <div>
          <main>
              {children}
          </main>
       </div>
       <Footer />
    </>
   
  )
}

export default Layout;