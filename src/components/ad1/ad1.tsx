import react from 'react';
import styles from "./ad1.module.css";
import Bgimage from "../image/bg2.jpg";
import bgtwo from "../image/bg6.jpg";
import btnstyle from "../main_visual/bannerstyle.module.css";

function Bagan (){
    return (
        <>
            <div className={styles.mainad1}>
                <div className={styles.miancard}>
                    <img className={styles.imgbe} src={Bgimage} alt="" />
                    <div className={styles.bgtxt}>
                        <p>--Travel to Bagan</p>
                        <p>--Contact us</p>
                        <button className={btnstyle.btn}>SEE MORE</button>
                    </div>
                </div>
                <div className={styles.ad1txt}>
                    <h2>We are Traveller</h2>
                </div>
                <div>
                    <img src={bgtwo} alt="" />
                    <div className={styles.bgtxttwo}>
                        <p>--Travel to Bagan</p>
                        <p>--Contact us</p>
                        <button className={btnstyle.btn}>SEE MORE</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Bagan;