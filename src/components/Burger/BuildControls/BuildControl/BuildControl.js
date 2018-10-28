import React from 'react';

import classes from './BuildControl.module.css';

const BuildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={BuildControl.Less}>Less</button>
    <button className={BuildControl.More}>More</button>
  </div>
);

export default BuildControl;
