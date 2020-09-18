import React from 'react';

import './canvas.styles.scss';

import Walking from '../../components/walking/walking.component';
import BriskWalking from '../../components/brisk-walking/brisk-walking.component';

class CanvasContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      walking: true,
      briskWalking: false,
      running: false,
      extreme: false,
    });
  }

  componentDidMount() {
    setInterval(() => {
      const { walking, briskWalking } = this.state;
      this.setState({
        ...this.state,
        walking: !walking,
        briskWalking: !briskWalking,
      });
    }, 5000);
  }

  render() {
    const { walking, briskWalking } = this.state;

    return (
      <div className='canvas'>
        {
          walking ? (<Walking/>) : null
        }
        {
          briskWalking ? (<BriskWalking/>) : null
        }
      </div>
    )
  }

}

export default CanvasContainer;
