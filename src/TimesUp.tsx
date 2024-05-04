import React from 'react';
import { Button } from '@material-ui/core';

const TimesUp: React.FC = () => {
  return (
    <div>
      <h1>Time's Up!</h1>
      <p>You ran out of time.</p>
      <Button variant="contained" color="primary" href="/">
        Try Again
      </Button>
    </div>
  );
};

export default TimesUp;
