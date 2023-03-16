import React from 'react'
import styles  from './style.module.css'
import bagan from '../../image/bagan.jpg'
import myeik from '../../image/myeik.jpg'
import kyaiktiyo from'../../image/kyaiktiyo.jpg'
function Myanmar() {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.main_visual}>
            <div className={styles.text}>
                <h1>Myanmar</h1>
                <div className={styles.text_child}>
                    <h4>Myanmar is a Jorney of Flavours.</h4>
                    <div className={styles.btn}>
                        <a href="" className={styles.abtn}>
                            <p className={styles.btntxt}>Explore More</p>
                            <i className="fa-solid fa-angles-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        <div className={styles.about}>
            <div className={styles.inner_warp}>
                <Desc
                img={bagan}
                title="Bagan"
                para1="Bagain is  the Jorney of Flavours"
                para2="Bagan was the capital city of the Pagan Kingdom, the first Burmese kingdom, from 1044 until 1297. Today the area is home to more than 2,500 Buddhist stupas, temples and monasteries – the largest and densest concentration of Buddhist monuments in the world – but at the kingdom's height there were over 10,000."
                />
                 <Desc
                img={myeik}
                title="Myeik"
                para1="Myeik is  the Jorney of Flavours"
                para2=" Myeik was the southernmost part of the Pagan Kingdom between the 11th and 13th centuries. After the Pagan Empire's collapse in 1287, Myeik became part of successive Thai kingdoms from the late 13th century to the middle of 18th century: first the Sukhothai Kingdom and later the Ayutthaya Kingdom."
                
                />
                 <Desc
                img={kyaiktiyo}
                title="Kyite Htee Yoe"
                para1="Kyite Htee Yoe is  the Jorney of Flavours"
                para2="The Pagoda was built more than 2500 years ago. Legend has it that the Pagoda was built on a Hair relic that was given to a hermit by Buddha Himself. The hermit treasured the sacred Hair in his hair knot until he found a boulder resembling his own head on which he could build a pagoda to enshrine it."
                />
            </div>
        </div>
    </div>
    </>
  )
}

const Desc=(props:any)=>{
    return(
        <div className={styles.props_container}>
            <div className={styles.img_container}>
                <img src={props.img} alt=""/>
            </div>
            <div className={styles.text_container} id='div2'>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.para1}>{props.para1}</p>
                <p className={styles.para2}>{props.para2}</p>

                <div className={styles.buybtn}>
                <a href=""><p className={styles.buytxt}>Buy Ticket</p><i className="fa-solid fa-plane-departure" style={{color: "black"}}></i></a>
                </div>

            </div>
        </div>
    )
}
export default Myanmar