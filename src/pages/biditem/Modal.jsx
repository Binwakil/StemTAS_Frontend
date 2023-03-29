import React, { useState } from 'react';
import styles from "./modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";

const Modal = ({ setIsOpen, tokenprice, makeOffer, setOfferPrice}) => {
  const [price, setPrice] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(price <= tokenprice){
        console.log("less than")
        return toast.error(`Your offer price is less than ${tokenprice} token price!`);
      }

      setOfferPrice(price)
      console.log(price)
      makeOffer()
      setIsOpen(false)
  }
  return (
    <>
      <div className={styles.darkBG} />
      <Toaster/>
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{`Please Enter your Offer Price:${tokenprice}`}</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <div className={styles.formGroup}>
              <label htmlFor='offer'>Offer price</label>            
              <input type="tel" id="offer" placeholder='Offer price' value={price} onChange={(e) => setPrice(e.target.value)} />
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