import React from "react";
import { useEffect, useState } from "react";
import { getAllFunctions } from "../../data";

import RandomItem from "../RandomItem/RandomItem";
import List from "../List/List";
import Item from "../Item/Item";
import Error from "../Error/Error";

import styles from "./Content.module.scss";

const Content = ({ category }) => {
  const [randomItem, setRandomItem] = useState(null);
  const [listData, setListData] = useState([]);
  const [errors, setErrors] = useState({
    randomError: false,
    listError: false,
    itemError: false,
  });
  const [currentItem, setCurrentItem] = useState(undefined);
  const [currentItemID, setCurrentItemID] = useState(null);

  const functions = getAllFunctions(category);

  const setItem = async () => {
    if (currentItemID === null) return;

    functions
      .getSingle(currentItemID)
      .then((res) => setCurrentItem(res))
      .catch(() => {
        setErrors((prev) => {
          return { ...prev, itemError: true };
        });
      });
  };

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

  useEffect(() => {
    setItem();
  }, [currentItemID]);

  if (errors.randomError && errors.listError) {
    return <Error />;
  }

  return (
    <div className={styles.content}>
      <RandomItem data={randomItem} error={errors.randomError} />
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
        <List
          error={errors.listError}
          setCurrentItemID={setCurrentItemID}
          currentItemID={currentItemID}
          data={listData}
        />
        <Item
          error={errors.itemError}
          type={category.toLowerCase()}
          data={currentItem}
        />
      </div>
    </div>
  );
};

export default Content;
