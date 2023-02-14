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
    <div className={styles.container}>
      <h4>Sortings</h4>
      <div className={styles.weight}>
        <select name="by weight" onChange={handleWeight}>
          <option selected disabled>
            Weight
          </option>
          <option value="all">All</option>
          <option value="lightest">Light</option>
          <option value="heaviest">Heavy</option>
        </select>
      </div>

      <div className={styles.alpha}>
        <select name="alphabetical" onChange={handleAlpha}>
          <option selected disabled>
            Alphabetical
          </option>
          <option value="all">All</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
      </div>
    </div>
  );
}

export default Orderings;
