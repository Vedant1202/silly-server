import React from 'react';

import './file.styles.scss';

import fileIcon from '../../assets/samples/file.svg';
// import serverBodyRunning from '../../assets/samples/server-3.svg';
// import rightHand from '../../assets/samples/rightHand.svg';

// eslint-disable-next-line react/prop-types
const File = ({ sliderValue }) => {
  const sizeMultiplier = Number(sliderValue) ? 6 + 1 * (sliderValue / 100) : 6;

  return (
    <div className="file">
        <img src={fileIcon} className="fileIcon" style={{width: `${sizeMultiplier}vw`}} alt="fileIcon" />
    </div>
  )
}


export default File;
