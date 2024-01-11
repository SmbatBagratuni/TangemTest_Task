import React from "react";
import styles from "./BottomBanner.module.scss";
import CloseIcon from "../../assets/icons/Close.svg"
import cn from "classnames";
const BottomBanner = ({onClose, isVisible}) => {

    return <div className={cn(styles.container, {[styles.visible]: isVisible})} >
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.imgWrapper}>
                    <img onClick={onClose} src={CloseIcon} alt={"close"}/>
                </div>
                <div className={styles.contentWrapper}>
                   <span className={styles.text}>Black Friday</span>
                   <span className={styles.discount}>10%OFF</span>
                    <span className={styles.checkout}>Use code <text>10FRIDAY </text> at checkout</span>
                   <button className={styles.button}>Shop now through Monday</button>
                </div>
            </div>
        </div>
    </div>
}

export default BottomBanner
