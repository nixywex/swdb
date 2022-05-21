import React from "react";

import styles from "./RandomItemContent.module.scss";

const RandomItemContent = ({ data }) => {
  return (
    <>
      <img className={styles.img} height={300} src={data.img} alt="" />
      <div className={styles.title}>
        <h3 className={styles.titleMain}>{data.name}</h3>
      </div>
      <div className={styles.info}>
        <ul className={styles.infoList}>
          {data.info.map((item) => {
            for (let prop in item) {
              return (
                <li key={prop} className={styles.infoItem}>
                  {prop}: <span className={styles.accent}>{item[prop]}</span>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className={styles.randomText}>random {data.type}</div>
    </>
  );
};

export default RandomItemContent;
