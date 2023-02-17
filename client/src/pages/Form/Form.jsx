import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { createDog, getTemps } from "../../redux/actions/actions";
import styles from "./Form.module.css";

function Form() {
  const dispatch = useDispatch();

  const temps = useSelector((state) => state.temperaments);
  temps.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  useEffect(() => {
    dispatch(getTemps());
  }, [dispatch]);

  const [form, setForm] = useState({
    name: "",
    weightMin: "",
    weightMax: "",
    heightMin: "",
    heightMax: "",
    life_span: "",
    temperament: [],
    image: "",
  });

  function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = "Name is required";
    }
    if (!input.weightMin) {
      errors.missingWMin = "Weight min is required";
    }
    if (!input.weightMax) {
      errors.missingWMax = "Weight max is required";
    }
    if (input.weightMax < input.weightMin) {
      errors.missingWMax = "Max can't be lower than the min";
    }
    if (!input.heightMin) {
      errors.missingHMin = "Height min is required";
    }
    if (!input.heightMax) {
      errors.missingHMax = "Height max is required";
    }
    if (input.heightMax < input.heightMin) {
      errors.missingHMax = "Max can't be lower than the min";
    }
    if (
      (input.life_span != "" && input.life_span < 1) ||
      input.life_span > 25
    ) {
      errors.lifespan = "Life span is not real";
    }
    if (input.temperament.length < 1) {
      errors.missingTemp = "At least one temperament required";
    }
    return errors;
  }
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [property]: value });
    setErrors(validate({ ...form, [property]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* axios.post("http://localhost:3001/dogs/", form).then(console.log(form)); */
    dispatch(createDog(form)).then(
      () => {
        alert("A new breed has been added!");
      },
      (error) => {
        alert(error.response.data.msg);
      }
    );
  };
  let selectedTemps = [];

  const handleSelect = (e) => {
    const id = e.target.value;
    !form.temperament.includes(id) &&
      setForm({ ...form, temperament: [...form.temperament, id] });
  };
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <h2 className={styles.title}>CREATE A NEW BREED</h2>
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <p>What is the name of the new breed?</p>
            <input
              type="text"
              name="name"
              placeholder="Breed name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <span>{errors.name}</span>}
            <p>Pick temperaments of the new breed</p>
            <select name="temps" onChange={handleSelect}>
              <option selected disabled>
                Temperaments List
              </option>
              {temps.length &&
                temps.map((tmp) => {
                  return (
                    <option name={tmp.name} key={tmp.id} value={tmp.id}>
                      {tmp.name}
                    </option>
                  );
                })}
            </select>
            <p>{selectedTemps.map((e) => e)}</p>
            {errors.missingTemp && <span>{errors.missingTemp}</span>}
            <p>Weight min and max</p>
            <input
              className={styles.inputN}
              type="number"
              name="weightMin"
              min="1"
              placeholder="Min (kg)"
              value={form.weightMin}
              onChange={handleChange}
            />
            -
            <input
              className={styles.inputN}
              type="number"
              name="weightMax"
              min="1"
              placeholder="Max (kg)"
              value={form.weightMax}
              onChange={handleChange}
            />
            {(errors.missingWMin || errors.missingWMax) && (
              <span>{errors.missingWMin || errors.missingWMax}</span>
            )}
            <p>Height min and max</p>
            <input
              className={styles.inputN}
              type="number"
              name="heightMin"
              min="1"
              placeholder="Min (cm)"
              value={form.heightMin}
              onChange={handleChange}
            />
            -
            <input
              className={styles.inputN}
              type="number"
              name="heightMax"
              min="1"
              placeholder="Max (cm)"
              value={form.heightMax}
              onChange={handleChange}
            />
            {(errors.missingHMin || errors.missingHMax) && (
              <span>{errors.missingHMin || errors.missingHMax}</span>
            )}
            <p>Life span of the breed?</p>
            <input
              className={styles.inputN}
              type="number"
              name="life_span"
              min="1"
              placeholder="(years)"
              value={form.life_span}
              onChange={handleChange}
            />
            {(errors.lifespan || errors.lifespan) && (
              <span>{errors.lifespan || errors.lifespan}</span>
            )}
            <p>Image (url) of the new breed</p>
            <input
              type="url"
              name="image"
              placeholder="Paste direct link"
              value={form.image}
              onChange={handleChange}
            />
            <input type="submit" value="CREATE" className={styles.submit} />
          </form>
          {/*         <img src={thug} alt="thug doggy" className={styles.thug} /> */}
        </div>
      </div>
    </div>
  );
}

export default Form;
