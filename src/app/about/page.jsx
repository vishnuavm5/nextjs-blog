import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/745045/pexels-photo-745045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            HandCrafting award winning digital exposure
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            illum in aliquam velit corrupti tempore veritatis adipisci alias
            assumenda eaque quasi at voluptates odio, a consequatur aut unde
            nam. Repudiandae. Perspiciatis odio aliquid impedit laudantium
            officiis explicabo aspernatur.
            <br />
            <br />
            Molestiae numquam natus animi facere facilis, autem placeat,
            expedita ipsum ex quod in? Unde expedita eius modi tempore illo
            delectus voluptates. Rerum! Esse ipsa, perspiciatis ea facere, quae
            sequi vero laborum reprehenderit mollitia necessitatibus animi
            labore quibusdam modi molestiae culpa velit at quidem nulla libero
            est tempora quisquam earum? Autem, cumque perferendis.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, fuga dolorum, nemo soluta sequi magnam ut quisquam
            debitis unde voluptates similique minima quod. Modi est minus
            ducimus molestiae accusamus et.
            <br />
            <br />
            - Hello world
            <br />
            - Hello Pages
            <br />- Hello All
          </p>
          <Button url={"/contact"} text={"Contact"} />
        </div>
      </div>
    </div>
  );
};

export default About;
