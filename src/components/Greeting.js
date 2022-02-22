import React, { useState } from 'react';

import Output from './Output';
import Async from './Async';
import classes from './Greeting.module.css';

const Greeting = () => {
  const [changedText, setchangedText] = useState(false);

  const changedTextHandler = () => {
    setchangedText((a) => !a);
  };

  return (
    <div className={classes.main}>
      <h1>Hello World!</h1>
      {!changedText && <p>it s so good to see u</p>}
      {changedText && <Output>Changed!</Output>}
      <Output>
        <button onClick={changedTextHandler}>Change Text</button>
      </Output>
      <Async />
    </div>
  );
};

export default Greeting;
