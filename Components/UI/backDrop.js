import React from "react";

const backDrop=(props)=>(
    props.show?<div className="backdrop" onClick={props.clickedBackdrop}></div>:null
)

export default backDrop;