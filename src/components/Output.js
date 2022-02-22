import React from 'react';

import classes from './Output.css';

const Output = (props) => {
  return (
    <div className={classes.main} style={props.className}>
      {props.children}
    </div>
  );
};

export default Output;
