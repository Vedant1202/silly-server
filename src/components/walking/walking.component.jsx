import React from 'react';

import './walking.styles.scss';

import leftHandWalking from '../../assets/samples/leftHand.svg';
import serverBodyWalking from '../../assets/samples/server.svg';
import rightHandWalking from '../../assets/samples/rightHand.svg';
import BackPackComponent from '../backpack/backpack.component';

const Walking = () => (
  <div className='walking'>
    <img src={serverBodyWalking} className="serverBodyWalking" alt="serverBody" />
    <img src={leftHandWalking} className="leftHandWalking" alt="leftHand" />
    <img src={rightHandWalking} className="rightHandWalking" alt="rightHand" />
    <BackPackComponent/>
  </div>
);

export default Walking;
