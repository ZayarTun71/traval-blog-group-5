import React from 'react'
import styles  from './style.module.css'
import bangkok from '../../image/bangkok.avif'
import pattaya from '../../image/pattaya.png'
import ayuttaya from'../../image/ayuttaya.jpg'
function Thai() {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.main_visual}>
            <div className={styles.text}>
                <h1>Thailand</h1>
                <div className={styles.text_child}>
                    <h4>Thailand is a Jorney of Flavours.</h4>
                    <div className={styles.btn}>
                        <a href="" className={styles.abtn}><p className={styles.btntxt}>Explore More</p><i className="fa-solid fa-angles-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
        
        <div className={styles.about}>
            <div className={styles.inner_warp}>
                <Desc
                img={bangkok}
                title="Bangkok"
                para1="Bangkok is  the Jorney of Flavours"
                para2="While there has been a small village on Chao Phraya River since the early 15th century, the city of Bangkok was officially founded as the country's capital in 1782 by King Rama I. Since then, the history, culture and language of the city have gone hand in hand with that of Thailand as a whole."
                />
                 <Desc
                img={pattaya}
                title="Pattaya"
                para1="Pattaya is  the Jorney of Flavours"
                para2="Pattaya began as a simple fishing village because of its location along the gulf. It was the main industry here, and all residents were local fishers or maintaining the quiet village life around the region. Pattaya has always had significant ties to the army."
                
                />
                 <Desc
                img={ayuttaya}
                title="Ayutthaya City"
                para1="Ayutthaya City is  the Jorney of Flavours"
                para2="The Historic City of Ayutthaya, founded in 1350, was the second capital of the Siamese Kingdom. It flourished from the 14th to the 18th centuries, during which time it grew to be one of the world's largest and most cosmopolitan urban areas and a center of global diplomacy and commerce."
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
export default Thai