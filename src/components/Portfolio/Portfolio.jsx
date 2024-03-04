import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>My Favorite cat meme</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="ec88237079284a706a2bd5a3e20b6d0c.jpg" alt="" />
            <p>It's this size</p>
        </div>
        <div className={styles.port_items}>
            <img src="1456418-img.webp" alt="" />
            <p>Hello Baby. this is you Flower</p>
        </div>
        <div className={styles.port_items}>
            <img src="Cat-Memes-29.jpg" alt="" />
            <p>distorted smile</p>
        </div>
        <div className={styles.port_items}>
            <img src="db6d8337cce84daf9ebbd667b04a8a1e.jpg" alt="" />
            <p>soul sucking smile</p>
        </div>
        <div className={styles.port_items}>
            <img src="Cat-Memes-01.jpg" alt="" />
            <p>IF This subject is F.</p>
        </div>
        <div className={styles.port_items}>
            <img src="3fc4d837c2bdceb245bf2998f16e7ec5.jpg" alt="" />
            <p>Huh?</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio