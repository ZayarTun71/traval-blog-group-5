import React from "react";
import styles from "./blog.module.css";
function Blog() {
  return (
    <div className={styles.card_section}>
      <div className={styles.inner}>
      <div className={styles.title}>
        <h1>Start your adventure.</h1>
        <div className={styles.blog_input}>
          <input type="text" placeholder="Search..."/>
          <button>Search</button>
        </div>
      </div>
      <div className={styles.cards}>
        <Card
          img="https://i.pinimg.com/originals/83/23/52/832352452375b511065e9ebf2e5438cb.jpg"
          title="Myanmar"
          para="Myanmar, the Republic of the Union of Myanmar, also known as Burma, is a country in Southeast Asia."
        />
        <Card
          img="https://img.freepik.com/premium-photo/grand-palace-complex-view-aphorn-phimok-prasat-pavilion-dusit-maha-prasat-hall-bangkok-thailandxd_104337-7744.jpg?w=2000"
          title="Thailand"
          para="Thailand is a really beautiful place, culturally and spiritually. You appreciate it the longer you stay."
        />
        <Card
          img="https://theworldpursuit.com/wp-content/uploads/2021/12/Lauterbrunnen-Village.jpg"
          title="Switzerland"
          para="Switzerland, is a landlocked country located at the confluence of Western, Central and Southern Europe."
        />
        <Card
          img="https://upload.travelawaits.com/ta/uploads/2021/04/fdfc242ffd612382c212e04702e4dfdfc24.jpg"
          title="Singapore"
          para="Singapore, officially the Republic of Singapore, is a sovereign island country and city-state in maritime Southeast Asia."
        />
        <Card
          img="https://static.independent.co.uk/2023/03/14/08/iStock-928725724.jpg"
          title="Chinese"
          para="Chinese is a group of languages spoken natively by the ethnic Han Chinese majority and many minority ethnic groups in Greater China."
        />
        <Card
          img="https://i.natgeofe.com/k/42e832f5-fd48-43ff-b338-091bdf4048ca/india-tajmahal.jpg?w=636&h=358"
          title="India"
          para="India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area and the second-most populous country. "
        />
      </div>
      </div>
      
    </div>
  );
}
const Card = (props: any) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.img_container}>
          <div className={styles.black}>
            <p>See More</p><i className="fa-solid fa-plane-departure"></i>
          </div>
          <a href="" className={styles.imglink}>
            <img className={styles.blogimg} src={props.img} alt="" />
          </a>
        </div>
        <div className={styles.txt_container}>
          <h2 className={styles.blogh2}>{props.title}</h2>
          <p className={styles.para}>{props.para}</p>
        </div>
      </div>
    </>
  );
};
export default Blog;
