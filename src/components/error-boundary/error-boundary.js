import React, { Component } from 'react';
import { connect } from 'react-redux';
import ErrorIndicator from '../error-indicator';
import { fetchDataFailure }  from '../../actions';

class ErrorBoundary extends Component {

  componentDidCatch(error, errorInfo) {
    fetchDataFailure(error);
  }

  render() {
    const { articlesError } = this.props;
    if (articlesError) {
      console.log( articlesError );
      return <ErrorIndicator />;
    }

    return this.props.children;
  }
}

const mapStateToProps = ({ error } ) => {
  return { error };
};

const mapDispatchToProps = { fetchDataFailure };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorBoundary);