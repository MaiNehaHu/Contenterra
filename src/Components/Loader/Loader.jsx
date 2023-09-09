import { useSelector } from "react-redux";
import "./loader.css";
import React from "react";

const Loader = () => {
  const list = useSelector((state) => {
    return state.fetchData.data;
  });

  return (
    <div
      className="loader"
      style={{ display: list.length ? "none" : "flex" }}
    ></div>
  );
};

export default Loader;
