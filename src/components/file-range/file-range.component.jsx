/* eslint-disable react/prop-types */
import React from 'react';

import './file-range.styles.scss';
import File from '../file/file.component';
import { connect } from 'react-redux';
import { setCurrentSillyRangeValues } from '../../redux/silly-range-values/silly-range-values.actions';
import { selectCurrentSillyRangeValues } from '../../redux/silly-range-values/silly-range-values.selector';
import { createStructuredSelector } from 'reselect';

class FileRange extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { setCurrentSillyRangeValues, sillyRangeValues } = this.props;

    setCurrentSillyRangeValues({
      ...sillyRangeValues,
      storageValue: event.target.value,
    });
  }

  render() {
    return (
      <div className="storage">
        <h2>Storage Controls</h2>
        <p>
          You can control the amount of file storage occupied in a server with this.
        </p>
        <File sliderValue={this.props.sillyRangeValues.storageValue} />
        <input
          className="storage-range"
          type="range"
          min="0"
          value={this.props.sillyRangeValues.storageValue}
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

export default connect(mapStateToProps, mapDispatchToProps)(FileRange);
