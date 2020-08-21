import React from "react";
import Card from "../card";
import renderElementList from "../../utils/render-element-list";
import "./card-list.scss";

const CardList = ({ data }) => {
  const list = renderElementList(data, Card);

  return (
    <ul className="card__list">
      { list }
    </ul>
  );
};

export default CardList;