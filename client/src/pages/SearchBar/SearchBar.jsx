import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../redux/actions/actions";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getByName(name));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Search a breed"
          onChange={(e) => handleInputChange(e)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          🐶🔍
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
