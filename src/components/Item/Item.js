import React from "react";

import Loader from "../Loader/Loader";
import Error from "../Error/Error";

import styles from "./Item.module.scss";

const Item = ({ data, error }) => {
  if (error) {
    return <Error />;
  }

  return (
    <div className={styles.item}>
      {!data ? (
        <Loader />
      ) : (
        <>
          <img width={320} src={data.img} alt="" />
          <div className="title">
            <h3 className={styles.title}>{data.name}</h3>
          </div>
          <ul>
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
        </>
      )}
    </div>
  );
};

export default Item;
