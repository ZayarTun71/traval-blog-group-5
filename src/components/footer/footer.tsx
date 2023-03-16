import React from 'react';
import styles from "./footer.module.css";
import inwstyle from "../inwrap/inwr.module.css";


function Footer(){
    return (
        <>
            <div className={styles.mainfooter}>
                <div className={inwstyle.inner_wrap}>
                    <div className={styles.maincard}>
                        <div className={styles.card}>
                        <ul>
                                <li>-Home</li>
                                <li>-About</li>
                                <li>-COntact</li>
                                <li>-Social Contact</li>
                                <li>-Destinations</li>
                                <li>-Setting</li>
                        </ul>

                        </div>
                        <div className={styles.card}>
                        <ul>
                                <li>-Home</li>
                                <li>-About</li>
                                <li>-COntact</li>
                                <li>-Social Contact</li>
                                <li>-Destinations</li>
                                <li>-Setting</li>
                        </ul>

                        </div>
                        <div className={styles.card}>
                        <ul>
                                <li>-Home</li>
                                <li>-About</li>
                                <li>-COntact</li>

                        </ul>

                        </div>
                        <div className={styles.card}>
                        <ul>
                            <p>SOCIAL CONTACTS</p>
                            <div className={styles.icon}>
                                <span>
                                    <i className="fa-brands fa-facebook fa-xl"></i>
                                    <i className="fa-brands fa-facebook-messenger fa-xl"></i>
                                    <i className="fa-brands fa-instagram fa-xl"></i>
                                    <i className="fa-solid fa-phone fa-xl"></i>
                                </span>
                            </div>
                        </ul>

                        </div>
                    </div>
                    <div className={styles.mainff}>
                        <p>@Travel</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer;