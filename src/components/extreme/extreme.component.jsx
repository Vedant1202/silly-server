import React from 'react';

import './extreme.styles.scss';

import leftHand from '../../assets/samples/leftHand.svg';
import serverBodyExtreme from '../../assets/samples/server-4.svg';
import rightHand from '../../assets/samples/rightHand.svg';
import BackPackComponent from '../backpack/backpack.component';

const Extreme = () => (
  <div className='brisk-walking'>
    <img src={serverBodyExtreme} className="serverBodyExtreme" alt="serverBody" />
    <img src={leftHand} className="leftHandExtreme" alt="leftHand" />
    <img src={rightHand} className="rightHandExtreme" alt="rightHand" />
    <BackPackComponent/>
  </div>
);

export default Extreme;
