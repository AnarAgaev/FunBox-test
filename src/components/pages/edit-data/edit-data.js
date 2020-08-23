import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ControllerGroupList from "../../controller-group-list";
import "./edit-data.scss";

const EditData = ({ data }) => {
  return (
    <>
      <Helmet>
        <title>FunBox test | Редактирование данных</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Helmet>
      <h1>Редактирование данных</h1>

      <form className="form-edit">
        <ControllerGroupList data={ data } />
        <Link to="/"
              className="button button_to-back">
        </Link>
      </form>
    </>
  );
};

const mapStateToProps = ({ data }) => {
  return { data };
};

export default connect(
  mapStateToProps
)(EditData);