import React from "react";
import './spinner.scss';

const Spinner = ({ visible }) => {

  const clazz = visible
    ? 'spinner visible'
    : 'spinner';

  return (
    <div className={ clazz } >
      <div className="loading">
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Spinner;