import React from 'react';
import styles from "./style.module.css";
import Imagelogo from "../image/logo.png"
import inwith from "../inwrap/inwr.module.css";

function Header(){
    return (
        <>
            <div className={styles.header}>
                <div className={inwith.inner_wrap}>
                    <div className={styles.display}>
                        <div className={styles.logo}>
                            <img src={Imagelogo} alt="react logo" />
                        </div>
                        <div className="nav_container">
                            <nav>
                                <ul className={styles.navul}>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">About</a></li>
                                    <li><a href="">Contact</a></li>
                                    <li><a href="">History</a></li>
                                    <li><a href="">Missing</a></li>
                                    <li><a href="">Register</a></li>
                                    <li><a href="">Login</a></li>
                                    <li><a><i className="fa-solid fa-magnifying-glass fa-xl"></i></a></li>

                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;