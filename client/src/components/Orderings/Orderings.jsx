import React from "react";
import { useDispatch } from "react-redux";
import { orderByName, orderByWeight } from "../../redux/actions/actions";
import styles from "./Orderings.module.css";

function Orderings() {
  const dispatch = useDispatch();

  const handleWeight = (e) => {
    dispatch(orderByWeight(e.target.value));
  };
  const handleAlpha = (e) => {
    dispatch(orderByName(e.target.value));
  };

  return (
    <div className={styles.orderContainer}>
      <h4>Sortings</h4>

      <div className={styles.alpha}>
        <p>Alphabetical</p>
        <select name="alphabetical" onChange={handleAlpha}>
          <option selected disabled value="Any">
            Default
          </option>
          <option value="a-z">A - Z</option>
          <option value="z-a">Z - A</option>
        </select>
      </div>

      <div className={styles.weight}>
        <p>By Weight</p>
        <select name="by weight" onChange={handleWeight}>
          <option selected value="all">
            All
          </option>
          <option value="lightest">Lighter first</option>
          <option value="heaviest">Heavier first</option>
        </select>
      </div>
    </div>
  );
}

export default Orderings;
