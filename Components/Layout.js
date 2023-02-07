import React from 'react'
import styles from '../styles/Layout.module.css';

import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import SideBar from './UI/sidebar';

const Layout=(props) => {


  const [showSideDraw, setshowSideDraw]= React.useState(false);

  function setSideDrawHandler(){
      setshowSideDraw(prevState=>prevState=false)
  }

  function sideDrawShow(){
      setshowSideDraw(prevState=>prevState=true)
  }
  return (
    <div classname={styles.layout}>
        <Nav clickedToggle={sideDrawShow}/>
        <SideBar showBackdrop={showSideDraw} backdropClicked={setSideDrawHandler}/>
        <Header />
       <div>
          <main>
              {props.children}
          </main>
       </div>
       <Footer />
    </div>
   
  )
}

export default Layout;