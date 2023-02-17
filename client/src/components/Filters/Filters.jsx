import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByTemps,
  getTemps,
  filterByCreated,
} from "../../redux/actions/actions";

import styles from "./Filters.module.css";

export default function Filters() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);
  //const [filter, setFilter] = useState("");

  useEffect(() => {
    if (!temperaments.length) {
      dispatch(getTemps());
    }
  }, [dispatch, temperaments]);

  temperaments.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const handleTemps = (e) => {
    dispatch(filterByTemps(e.target.value));
    /* setFilter(`filter ${e.target.value}`); */
  };
  const handleCreated = (e) => {
    dispatch(filterByCreated(e.target.value));
    /* setFilter(`filter ${e.target.value}`); */
  };

  return (
    <div className={styles.filterContainer}>
      <h4>filtering</h4>
      <div className={styles.temps}>
        <p>Temperaments</p>
        <select name="temperaments" onChange={handleTemps}>
          <option key={"any"} value="any">
            All
          </option>
          {temperaments &&
            temperaments.map((e) => {
              return (
                <option key={e.id} value={e.name}>
                  {e.name}
                </option>
              );
            })}
        </select>
      </div>

      <div className={styles.created}>
        <p>Origin</p>
        <select name="created" onChange={handleCreated}>
          <option value="any">Any</option>
          <option value="created">Created Breeds</option>
          <option value="api">Original Breeds</option>
        </select>
      </div>
    </div>
  );
}
