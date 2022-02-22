import React, { useState } from 'react';

import classes from './Greeting.module.css';

const Greeting = () => {
  const [changedText, setchangedText] = useState(false);

  const changedTextHandler = () => {
    setchangedText((a) => !a);
  };

  return (
    <div className={classes.main}>
      <h1>Hello World!</h1>
      {!changedText && <p>It s so good to see u</p>}
      {changedText && <p>Changed!</p>}
      <button onClick={changedTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
