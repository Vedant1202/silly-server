import React from 'react';

import './running.styles.scss';

import leftHand from '../../assets/samples/leftHand.svg';
import serverBodyRunning from '../../assets/samples/server-3.svg';
import rightHand from '../../assets/samples/rightHand.svg';
import BackPackComponent from '../backpack/backpack.component';

const Running = () => (
  <div className='brisk-walking'>
    <img src={serverBodyRunning} className="serverBodyRunning" alt="serverBody" />
    <img src={leftHand} className="leftHandRunning" alt="leftHand" />
    <img src={rightHand} className="rightHandRunning" alt="rightHand" />
    <BackPackComponent/>
  </div>
);

export default Running;
