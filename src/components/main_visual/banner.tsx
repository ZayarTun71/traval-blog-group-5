import React from 'react';
import styles from './bannerstyle.module.css';
import inwr from '../inwrap/inwr.module.css';

function Banner(){
    return (
        <>
            <div className={styles.main_banner}>
                <div className={inwr.inner_wrap}>
                    <div className={styles.txt}>
                        <h1>Travel To World</h1>
                        <h2 className={styles.bannerh2}>Smartraveller</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem saepe magnam dolorum, odit vitae minus vero eum nam consectetur cum iusto quia, porro repellendus eligendi?</p>
                        <button className={styles.btn}>SEE MORE</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Banner;