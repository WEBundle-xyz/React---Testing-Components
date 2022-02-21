import React from 'react';

import classes from './Greeting.module.css';

const Greeting = () => {
  return (
    <div className={classes.main}>
      <h1>Hello World!</h1>
      <p>It s so good to see u</p>
    </div>
  );
};

export default Greeting;
