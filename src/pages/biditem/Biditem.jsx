import React, {useEffect, useState} from "react";
import './biditem.css'
import Modal from './Modal';
import Modal2 from './Modal2';
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


  let makeOffer = async () => {      
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
              <button className="primary-btn" onClick={() => setIsOpen(true) }>{makingoffer ? 'Buying ........' : 'Buy Stemtas'}</button>
              <button className="secondary-btn" onClick={() => setIsModal(true)} >View biddings</button>
            </div>
          </div>
          
      </div>
  )
};

export default Biditem;

        