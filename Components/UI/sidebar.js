import React from "react";
import Navigations from "../Navigations";
import BackDrop from "../UI/backDrop";

const sideBar =(props)=>{

    let attachedClasses=['SideBar','Close'].join(' ');
    
    if(props.showBackdrop){
        attachedClasses=['SideBar','Open'].join(' ');
    }
    
    return(
        <>
            <BackDrop show={props.showBackdrop} clickedBackdrop={props.backdropClicked}/>
            <div className={attachedClasses}>
                <div className="Logo">
                    Logo
                </div>

                <Navigations/>
            </div>
        </>
        
    )
}

export default sideBar;