import React from 'react';

import './canvas.styles.scss';

import Walking from '../../components/walking/walking.component';
import BriskWalking from '../../components/brisk-walking/brisk-walking.component';
import Running from '../../components/running/running.component';
import Extreme from '../../components/extreme/extreme.component';

class CanvasContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      serverState: "walking",
      stateCount: 0,
      stateVariables: ["walking", "briskWalking", "running", "extreme"],
    });
  }

  componentDidMount() {
    setInterval(() => {
      const { stateCount, stateVariables } = this.state;
      const newStateCount = (stateCount + 1) % 4;
      this.setState({
        ...this.state,
        stateCount: newStateCount,
        serverState: stateVariables[newStateCount],
      });
    }, 6000);
  }

  render() {
    const { serverState } = this.state;

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

export default CanvasContainer;
