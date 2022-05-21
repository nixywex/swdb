import React from "react";
import { useEffect, useState } from "react";
import { getAllFunctions } from "../../data";

import RandomItem from "../RandomItem/RandomItem";
import List from "../List/List";
import Error from "../Error/Error";

import styles from "./Content.module.scss";

const Content = ({ category }) => {
  const [randomItem, setRandomItem] = useState(null);
  const [listData, setListData] = useState([]);
  const [errors, setErrors] = useState({
    randomError: false,
    listError: false,
  });

  const functions = getAllFunctions(category);

  useEffect(() => {
    functions
      .getRandom()
      .then((res) => setRandomItem(res))
      .catch(() => {
        setErrors((prev) => {
          return { ...prev, randomError: true };
        });
      });

    functions
      .getAll()
      .then((res) => {
        setListData(res);
      })
      .catch(() => {
        setErrors((prev) => {
          return { ...prev, listError: true };
        });
      });
  }, []);

  if (errors.randomError && errors.listError) {
    return <Error />;
  }

  return (
    <div className={styles.content}>
      <div className={styles.titleBlock}>
        <img
          className={styles.titleImg}
          height={40}
          src={`../${category.toLowerCase()}.svg`}
          alt=""
        />
        <h1 className={styles.title}>{category + "s"}</h1>
      </div>
      <div className={styles.mainContent}>
        <List error={errors.listError} data={listData} />
        <RandomItem
          data={randomItem}
          error={errors.randomError}
          type={category}
        />
      </div>
    </div>
  );
};

export default Content;
