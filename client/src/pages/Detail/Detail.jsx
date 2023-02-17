import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cleanState, dogById } from "../../redux/actions/actions";
import NavBar from "../NavBar/NavBar";
import styles from "./Detail.module.css";
import loader from "../../assets/images/loader.gif";

function Detail() {
  let { id } = useParams();
  let param = useSelector((state) => state.dogDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dogById(id));
    return dispatch(cleanState());
  }, []);
  const {
    name,
    temperament,
    life_span,
    weightMin,
    weightMax,
    heightMin,
    heightMax,
    image,
  } = param;
  let img = image ? image : loader;
  return (
    <div>
      <NavBar />
      <div className={styles.detailContainer}>
        <p className={styles.title}>{name}</p>
        <img src={img} alt="dog detail" />

        <h3>Temperaments</h3>
        <p className={styles.temps}>
          {temperament ? temperament.join(", ") : "is not described"}
        </p>
        <h3>Weight</h3>
        <p className={styles.weight}>
          {weightMin}kg - {weightMax}kg
        </p>
        <h3>Height</h3>
        <p className={styles.height}>
          {heightMin}cm - {heightMax}cm
        </p>
        <h3>Life Span</h3>
        <p className={styles.span}>{life_span}</p>
      </div>
    </div>
  );
}

export default Detail;
