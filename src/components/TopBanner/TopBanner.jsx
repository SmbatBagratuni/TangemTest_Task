import React from "react";
import styles from "./TopBanner.module.scss"
import LeftImg from "../../assets/images/display21 1.png"
import CloseIcon from "../../assets/icons/Close.svg"
import Circle from "../../assets/icons/circle.svg"
import MenuIcon from "../../assets/icons/menu-icon.svg"
const TopBanner = ({onClose}) => {

    return <div id="top-banner" className={styles.container}>
        <div className={styles.left}>
            <img src={LeftImg} alt={"banner"}/>
        </div>
        <div className={styles.middle}>
            <span className={styles.dateText}>Black Friday</span>
            <span className={styles.date}>, 24-27 Nov </span>
            <img className={styles.circle} src={Circle} alt={"circle"}/>
            <span className={styles.discount}> 10%OFF </span>
            <img className={styles.circle} src={Circle} alt={"circle"}/>
            <span className={styles.code}> Use code <text className={styles.discount}> 10FRIDAY </text></span>
            <span className={styles.checkout}>at checkout</span>
        </div>
        <div className={styles.right}>
            <button className={styles.button}>Shop now</button>
            <img className={styles.close} onClick={onClose} src={CloseIcon} alt={"closeIcon"}/>
            <img className={styles.menuIcon} src={MenuIcon} alt={"menuIcon"}/>
        </div>
        </div>

}
export default TopBanner
