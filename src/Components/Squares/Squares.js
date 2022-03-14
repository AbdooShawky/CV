import React from "react";
import Square from "./Square";
import st from './Squares.module.css';

function Squares() {
  return (
    <>
      <div className={`${st["square_container"]} `} >
        <div className={`${st["square_parent"]} `} >
          <Square duration={15} style={{left:0 ,width:150 ,height:150}}/>
        </div>
        <div className={`${st["square_parent"]} `} >
          <Square duration={30} style={{left:0 ,width:300 ,height:300}}/>
        </div>
        <div className={`${st["square_parent"]} `} >
          <Square duration={25} style={{left:0 ,width:200 ,height:200}}/>
        </div>
        <div className={`${st["square_parent"]} `} >
          <Square duration={15} style={{left:0 ,width:250 ,height:250}}/>
        </div>
        <div className={`${st["square_parent"]} `} >
          <Square duration={40} style={{left:0 ,width:250 ,height:250}}/>
        </div>
      </div>
    </>
  );
}

export default Squares;
