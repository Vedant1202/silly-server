/* eslint-disable react/prop-types */
import React from 'react';

import './backpack.styles.scss';
import backpackWalking from '../../assets/samples/backpack.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentSillyRangeValues } from '../../redux/silly-range-values/silly-range-values.selector';

// eslint-disable-next-line react/prop-types
const BackPackComponent = ({ sillyRangeValues }) => {
  const storageValueMultiplier = sillyRangeValues.storageValue ? 15 + 8 * (sillyRangeValues.storageValue / 100) : 15;

  return (
    <img src={backpackWalking}
      style={{
        width: `${storageValueMultiplier}vw`,
        top: `${storageValueMultiplier - 1.2*storageValueMultiplier}vh`,
        left: `-${storageValueMultiplier - .6*storageValueMultiplier}vw`,
        animation: `bounceWalking 3.5s infinite`,
      }}
      className="backpack" alt="backpack"
    />
  )
}

const mapStateToProps = createStructuredSelector({
  sillyRangeValues: selectCurrentSillyRangeValues,
})

export default connect(mapStateToProps)(BackPackComponent);
