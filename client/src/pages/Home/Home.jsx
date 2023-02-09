import React from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDogs } from "../../redux/actions";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
  }, []);

  return <CardsContainer />;
}

export default Home;
