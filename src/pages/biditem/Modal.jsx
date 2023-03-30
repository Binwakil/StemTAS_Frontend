import React, { useState } from 'react';
import styles from "./modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";

const Modal = ({ setIsOpen, tokenprice, makeOffer, setOfferPrice}) => {
  const [price, setPrice] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(Number(price) <= Number(tokenprice)){
        return toast.error(`Your offer price should be greater than ${tokenprice} token price!`);
      }
      setOfferPrice(price)
      makeOffer(price)
      setIsOpen(false)
  }

  const handlePrice = (e) => {
    setPrice(e.target.value)
  }

  return (
    <>
      <div className={styles.darkBG} />
      <Toaster/>
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{`Please Enter your Offer Price:`}</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <div className={styles.formGroup}>
              <label htmlFor='offer'>Offer price start from {tokenprice}</label>            
              <input type="tel" id="offer" placeholder='Offer price' value={price} onChange={handlePrice} />
            </div>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                type='submit'
                className={styles.submitBtn}
                onClick={handleSubmit}
              >
                Submit Offer
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Modal;