import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt maxime repudiandae voluptates ea dolores possimus vitae aliquam neque, eum et aliquid. Ullam, aperiam nobis mollitia dignissimos nesciunt sapiente sunt nulla.
          Error mollitia blanditiis consequuntur, et, nesciunt, ut soluta animi dolore dolorem provident libero? Necessitatibus excepturi nam fugiat ratione voluptates minus, voluptas aut at temporibus obcaecati enim quis maxime nisi sed.</p>
          <Button text={'See More'} url={"#"}/>
        </div>
        <div className={styles.imgContainer}>
        <Image className={styles.img} fill={true} src={"https://images.pexels.com/photos/17867770/pexels-photo-17867770/free-photo-of-fighting-bucks-on-grassland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt=""/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt maxime repudiandae voluptates ea dolores possimus vitae aliquam neque, eum et aliquid. Ullam, aperiam nobis mollitia dignissimos nesciunt sapiente sunt nulla.
          Error mollitia blanditiis consequuntur, et, nesciunt, ut soluta animi dolore dolorem provident libero? Necessitatibus excepturi nam fugiat ratione voluptates minus, voluptas aut at temporibus obcaecati enim quis maxime nisi sed.</p>
          <Button text={'See More'} url={"#"}/>
        </div>
        <div className={styles.imgContainer}>
        <Image className={styles.img} fill={true} src={"https://images.pexels.com/photos/17867770/pexels-photo-17867770/free-photo-of-fighting-bucks-on-grassland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Category;
