import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { createDog, getTemps } from "../../redux/actions/actions";

function Form() {
  const dispatch = useDispatch();

  const temps = useSelector((state) => state.temperaments);

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

  /* const [errors, setErrors] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    temperament: [],
    image: "",
  })

  const validate = ()=>{
    if(form.name.length)
  } */

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [property]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* axios.post("http://localhost:3001/dogs/", form).then(console.log(form)); */
    dispatch(createDog(form)).then(
      () => {
        alert("creado");
      },
      (error) => {
        alert(error.response.data.msg);
      }
    );
  };

  const handleSelect = (e) => {
    console.log(e.target.value);
    const id = e.target.value;
    !form.temperament.includes(id) &&
      setForm({ ...form, temperament: [...form.temperament, id] });
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Breed name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="height"
          placeholder="Approx height (centimeters)"
          value={form.height}
          onChange={handleChange}
        />
        <input
          type="text"
          name="weight"
          placeholder="Approx weight (kilograms)"
          value={form.weight}
          onChange={handleChange}
        />
        <input
          type="text"
          name="life_span"
          placeholder="Life expectancy (years)"
          value={form.life_span}
          onChange={handleChange}
        />
        <input
          type="url"
          name="image"
          placeholder="Set image url"
          value={form.image}
          onChange={handleChange}
        />
        <select name="temps" onChange={handleSelect}>
          <option selected disabled>
            Set temperaments
          </option>
          {temps.length &&
            temps.map((tmp) => {
              return (
                <option key={tmp.id} value={tmp.id}>
                  {tmp.name}
                </option>
              );
            })}
        </select>
        <input type="submit" value="CREATE" />
      </form>
    </div>
  );
}

export default Form;
