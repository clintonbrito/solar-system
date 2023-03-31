import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Title.css';

export default class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className="page__text title__h2--margin">{ headline }</h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string,
}.isRequired;
