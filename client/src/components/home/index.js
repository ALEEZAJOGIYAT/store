import React,{useState} from 'react'

import { Button, Container, Typography } from '@mui/material'
import Paper from "@mui/material/Paper";
import Lottie from 'react-lottie'
import animationData from '../../lotties/shopping.json'
import Typewriter from 'typewriter-effect'
import {BasicModal} from './createstoremodal'
import { ProductModal } from './buyprodmodal';
// import './style.scss'
// import '../../images/'


export const Home=()=>{

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };

    return(
        <Container >
            <div
          style={{
            display: "flex",
            flexDirection: "initial",
          }}
        >
          <Lottie
            style={{ marginTop: 44,marginLeft:-25 }}
            options={defaultOptions}
            height={500}
            width={500}
          />
          <div className="type_writter" style={{
              fontFamily:'sans-serif',
              marginTop:30,
              display:"flex",
              alignItems:'center',
              marginLeft:50,
              fontWeight:800,
              fontSize:40,
              color:'rgb(17, 54, 63)'}}>
          <Typewriter
              onInit={(typewriter)=> {
            typewriter
            // .typeString("GeeksForGeeks")                
            .pauseFor(100)
            .deleteAll()
            .typeString("What are you looking for??")
            .start();
            }}
          />
              </div>
          </div>
          <div style={{ 
              display:'flex',
              alignItems:'center',
              marginTop:-80,
              marginLeft:700

}}>
               <BasicModal/>
               <ProductModal/>
          </div>
            </Container>

    )
}