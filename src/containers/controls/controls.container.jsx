import React from 'react';

import './controls.styles.scss';
import FileRange from '../../components/file-range/file-range.component';
import Computation from '../../components/computation/computation.component';

const ControlsContainer = () => (
  <div className='controlsContainer'>
    <h1>If Server was a Human</h1>
    <p>
      Welcome, meet <i>Serv</i>, a server with human characteristics.
      <ul>
        <li>
          Serv has a backpack in which it can carry it's memory(storage).
        </li>
        <li>
          Serv runs according to the workload(computations) it does.
        </li>
        <li>
          The mood of Serv depends upon it's backpack and running.
        </li>
      </ul>

      <br/>
      P.S. Take care to not put much strain on Serv, it always tries
      it's best ;)
    </p>
    <hr/>
    <FileRange/>
    <Computation/>
  </div>
);

export default ControlsContainer;
