import React, {useEffect, useState} from "react";
import './biditem.css'
import Modal from './Modal';
import Modal2 from './Modal2';
import Modal3 from './Modal3';
import Timer from './Timer';
// import creator from '../../assets/seller2.png'
// import item from '../../assets/item1.png'
import { Link, useParams } from "react-router-dom";
// import { FaEllipsisV } from "react-icons/fa"
import { yourToken, OfferPrice,loadCSaleItems  } from "../../near/utils";

// import toast, { Toaster } from "react-hot-toast";

const Biditem = ({product}) => {
  let {token_id} = useParams();

    let [tokenName, setTokenName] = useState('');
    let [tokenId, setTokenId] = useState('');
    let [tokenDescription, setTokenDescription] = useState('');
    let [tokenImage, setTokenImage] = useState('');
    let [tokenprice, setTokenprice] = useState('');
    let [offerPrice, setOfferPrice] = useState('');    
    let [makingoffer, setmakingoffer] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isModal, setIsModal] = useState(false);
    const [ischeck, setIsCheck] = useState(false);
    // Timer
  const [time, setTime] = useState(900); // 900 seconds = 15 minutes
  const [isRunning, setIsRunning] = useState(false);

      let getusernft = async() => {
        let gettingNFT = await loadCSaleItems()
        let approve_token = gettingNFT.filter(token => token.token_id === token_id)   
        setTokenName(approve_token[0].metadata.title);
        setTokenDescription(approve_token[0].metadata.description);
        setTokenImage(approve_token[0].metadata.media);
        setTokenprice(approve_token[0].sale_conditions);
        setTokenId(token_id)
    }

    useEffect(() => {
      getusernft();
    }, [])

// const handleStart = () => {
// }

let checkout = async () => {
 
  setmakingoffer(true);
  let oprice = JSON.stringify(tokenprice)
  let making_offer = await OfferPrice(tokenId, tokenprice+"000000000000000000000000");
  if(making_offer)
  {
  alert("the NFT is approve for listing")
  setmakingoffer(false);
  console.log("Status " +making_offer)
  }

  
}

let makeOffer = async (op) => {      
    setIsRunning(!isRunning);
    console.log(offerPrice)
    console.log(op)
      let sale_conditions = {
        sale_conditions: offerPrice
      };
      setmakingoffer(true);
      let price = JSON.stringify(sale_conditions)
      let making_offer = await OfferPrice(tokenId, price+"000000000000000000000000");
      if(making_offer)
      {
      alert("the NFT is approve for listing")
      setmakingoffer(false);
      console.log("Status " +making_offer)
      }  
  }
  return( 
    <div className='item section__padding'>
        {isOpen && <Modal setIsOpen={setIsOpen} tokenprice={tokenprice} makeOffer={makeOffer} setOfferPrice={setOfferPrice}/>}
        {isModal && <Modal2 setIsModal={setIsModal}/>}
        {ischeck && <Modal3 setIsCheck={setIsCheck}/>}
        <div className="item-image">
          <img src={tokenImage} alt="item" />
        </div>
          <div className="item-content">
            <div className="item-content-title">
              <h1>{tokenName}</h1>
              <p><span>{tokenId}</span></p>
            </div>
            <div className="item-content-detail">
              <p>{tokenDescription}</p>
            </div>
            <div className="item-content-buy">
              {makingoffer ? <Timer setIsRunning={setIsRunning} isRunning={isRunning} time={time} setTime={setTime}/> : ''}
              {time <= 0 ?<button className="primary-btn" onClick={() => checkout()} >Checkout</button>: <button className="primary-btn" disabled={makingoffer} onClick={() => setIsOpen(true) }>{makingoffer ? 'Bidding ........' : 'Bid Stemtas'}</button> }
              <button className="secondary-btn" onClick={() => setIsModal(true)} >View Biddings</button>
            </div>
          </div>
          
      </div>
  )
};

export default Biditem;

        