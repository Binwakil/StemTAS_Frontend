import React from 'react';
import styles from "./modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsModal}) => {
 
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsModal(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{`Available Bids`}</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsModal(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <div className={styles.Group}>
                <div className={styles.card}>
                    <h2>Musa Abdullahi</h2>
                    <h2>5000</h2>
                </div>
                <div className={styles.card}>
                    <h2>Musa Abdullahi</h2>
                    <h2>5000</h2>
                </div>
                <div className={styles.card}>
                    <h2>Musa Abdullahi</h2>
                    <h2>5000</h2>
                </div>
            </div>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsModal(false)}
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