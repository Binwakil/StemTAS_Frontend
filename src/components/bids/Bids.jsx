import React, {useEffect, useState} from "react";
import './bids.css'
import { AiFillHeart,AiOutlineHeart } from "react-icons/ai";

import { Link } from 'react-router-dom';
import { Bid } from "../bid";
import { isLogging, approveAccount, loadCSaleItems } from "./../../near/utils";
// import animations and framer-motion
import { useAnimation, motion } from "framer-motion";
import {
	ProjAnimation
} from "./../animation";
import { useInView } from "react-intersection-observer";

const Bids = ({title}) => {
  const controls = useAnimation();
	const { ref, inView } = useInView();
	useEffect(() => {
		if (inView) {
			controls.start("show");
		} else {
			controls.start("hidden");
		}
	}, [controls, inView]);

  let [userNFT, setUserNFT] = useState([]);
  let getusernft = async() => {
    let gettingNFT = await loadCSaleItems()
    setUserNFT(gettingNFT);
    // console.log(gettingNFT)
}


useEffect(() => {
  getusernft();
}, [userNFT])

  return (
    <motion.div ref={ref}
				initial="hidden"
				animate={controls} 
        variants={ProjAnimation} className='bids section__padding'>
    <div className="bids-container">
    <div className="bids-container-text">
        <h1>StemTas MarketPlace</h1>
      </div>    
    <div className="contract_asset_container">
            {
              userNFT.map((item) => {
              return(
               <Bid key={item.token_id} product={item}></Bid>
              ) }) 
            }
            </div>
            </div>
  
  </motion.div>
)
}

export default Bids
