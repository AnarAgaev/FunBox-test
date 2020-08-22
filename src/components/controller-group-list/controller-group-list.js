import React from "react";
import ControllerGroup from "../controller-goup";
import renderElementList from "../../utils/render-element-list";
import "./controller-group-list.scss";

const ControllerGroupList = ({ data }) => {
  const list = renderElementList(data, ControllerGroup);

  return (
    <div className="controls-wrap">
      { list }
    </div>
  );
};

export default ControllerGroupList;