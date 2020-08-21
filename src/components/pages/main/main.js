import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withListService from "../../hoc";
import { fetchData } from "../../../actions";
import Spinner from "../../spinner";
import ErrorIndicator from "../../error-indicator";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
import CardList from "../../card-list";
import './main.scss';

class Main extends Component {
  componentDidMount() {
    // Зправшиваем данные из исходного файла только один раз
    if (!this.props.data.length) {
      this.props.fetchData();
    }
  }

  render() {
    const { data, loading, error } = this.props;

    if (loading) {
      return <Spinner visible={ loading } />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <>
        <Helmet>
          <title>FunBox test | Главная страница</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
        </Helmet>
        <h1>Ты сегодня покормил кота?</h1>
        <CardList data={ data } />
      </>
    );
  }
}

const mapStateToProps = ({ data, loading, error }) => {
  return { data, loading, error };
};

const mapDispatchToProps = ( dispatch, { dataService } ) => {
  return {
    fetchData: () => fetchData( dispatch, dataService )
  };
};

export default compose(
  withListService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Main);