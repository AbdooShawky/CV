import React from "react";
import st from './Squares.module.css';
import styled from "styled-components";


const Square = styled.div`


    background-color: rgba(255, 255, 255, 0.02) !important;
    width: 200px;
    height: 200px;
    margin: 0px 10px;
    position: absolute;
    bottom: 0;
    animation: square-spin infinite ${props => props.duration}s linear;

  


@keyframes square-spin {
    0% {
      transform: rotate(0deg) ;
      bottom:-300px;
    }
    

    100% {
      transform:  rotate(360deg) ;
      bottom:1000px;
      
      
    }
  }
  

`;


export default Square;
