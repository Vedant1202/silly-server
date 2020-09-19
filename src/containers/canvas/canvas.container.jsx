/* eslint-disable react/prop-types */
import React from 'react';

import './canvas.styles.scss';

import Walking from '../../components/walking/walking.component';
import BriskWalking from '../../components/brisk-walking/brisk-walking.component';
import Running from '../../components/running/running.component';
import Extreme from '../../components/extreme/extreme.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentSillyRangeValues } from '../../redux/silly-range-values/silly-range-values.selector';

class CanvasContainer extends React.Component {
  render() {

    const { storageValue, computationValue } = this.props.sillyRangeValues;
    let serverState = "walking";

    if (storageValue <= 25 && computationValue <= 25) {
      serverState = "walking";
    } else if (storageValue <= 50 && computationValue <= 50) {
      serverState = "briskWalking";
    } else if (storageValue <= 75 && computationValue <= 75) {
      serverState = "running";
    } else if (storageValue <= 100 && computationValue <= 100) {
      serverState = "extreme";
    } else {
    }

    return (
      <div className='canvas'>
        {
          serverState === "walking" ? (<Walking/>) : null
        }
        {
          serverState === "briskWalking" ? (<BriskWalking/>) : null
        }
        {
          serverState === "running" ? (<Running/>) : null
        }
        {
          serverState === "extreme" ? (<Extreme/>) : null
        }
      </div>
    )
  }

}

const mapStateToProps = createStructuredSelector({
  sillyRangeValues: selectCurrentSillyRangeValues,
});

export default connect(mapStateToProps)(CanvasContainer);
