import React from 'react';

import './brisk-walking.styles.scss';

import leftHand from '../../assets/samples/leftHand.svg';
import serverBodyBriskWalking from '../../assets/samples/server-2.svg';
import rightHand from '../../assets/samples/rightHand.svg';

const BriskWalking = () => (
  <div className='brisk-walking'>
    <img src={serverBodyBriskWalking} className="serverBodyBriskWalking" alt="serverBody" />
    <img src={leftHand} className="leftHandBriskWalking" alt="leftHand" />
    <img src={rightHand} className="rightHandBriskWalking" alt="rightHand" />
  </div>
);

export default BriskWalking;
