/* eslint-disable react/prop-types */
import React from 'react';

import './computation.styles.scss';
import { connect } from 'react-redux';
import { setCurrentSillyRangeValues } from '../../redux/silly-range-values/silly-range-values.actions';
import { selectCurrentSillyRangeValues } from '../../redux/silly-range-values/silly-range-values.selector';
import { createStructuredSelector } from 'reselect';

class Computation extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { setCurrentSillyRangeValues, sillyRangeValues } = this.props;

    setCurrentSillyRangeValues({
      ...sillyRangeValues,
      computationValue: event.target.value,
    });
  }

  render() {
    return (
      <div className="computation">
        <h2>Computation Controls</h2>
        <p>
          You can control the amount of computations going on in a server with this.
        </p>
        <input
          className="computation-range"
          type="range"
          min="0"
          value={this.props.sillyRangeValues.computationValue}
          onChange={this.handleChange}
          max="100"
        ></input>
      </div>
    )
  }

}

const mapStateToProps = createStructuredSelector({
  sillyRangeValues: selectCurrentSillyRangeValues,
});

const mapDispatchToProps = dispatch => {
  return {
      setCurrentSillyRangeValues: sillyRangeValues => {
          dispatch(setCurrentSillyRangeValues(sillyRangeValues));
      },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Computation);
