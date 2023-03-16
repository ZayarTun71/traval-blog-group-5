import React from 'react'
import style from "./style.module.css"
function About() {
  return (
    <div className={style.about_main}>
        <div className={style.content}>
            <h1>About Us</h1>  
            <h2>Jeremy Scott Foster</h2>
            <div className={style.about_text_container}>
                <p className={style.about_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eligendi sed aspernatur ad doloribus accusantium veniam dolorem debitis minus delectus, illo ex quam officiis reprehenderit similique reiciendis cum quidem ducimus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eligendi sed aspernatur ad doloribus accusantium veniam dolorem debitis minus delectus, illo ex quam officiis reprehenderit similique reiciendis cum quidem ducimus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eligendi sed aspernatur ad doloribus accusantium veniam dolorem debitis minus delectus, illo ex quam officiis reprehenderit similique reiciendis cum quidem ducimus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eligendi sed aspernatur ad doloribus accusantium veniam dolorem debitis minus delectus, illo ex quam officiis reprehenderit similique reiciendis cum quidem ducimus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eligendi sed aspernatur ad doloribus accusantium veniam dolorem debitis minus delectus, illo ex quam officiis reprehenderit similique reiciendis cum quidem ducimus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eligendi sed aspernatur ad doloribus accusantium veniam dolorem debitis minus delectus, illo ex quam officiis reprehenderit similique reiciendis cum quidem ducimus!</p>
                
          </div>
          <div className={style.aboutbtn}>
            <a href='#'>Learn More</a>
            <i className={`fa-solid fa-arrow-right`}></i>
          </div>
        </div>
         <div className={style.about_image_container}>
            <img src="https://travelfreak.com/wp-content/uploads/2020/12/jeremy-collage.webp" className={style.about_img} alt="" />
      </div>      
    </div>
  )
}



export default About
