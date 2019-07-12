import React from 'react';

import { Grid, Col, Row } from './lib';

const App = () => {
  const renderExampleCols = (count, size) => {
    return Array.from(Array(count)).map((n, i) => {
      return <Col key={i} size={size ? size : 1} className='example-col'>{i + 1}</Col>;
    });
  }

  return (
    <Grid rowGap='1rem'>
      <Col size={3}></Col>
      <Col size={6}>
        <div className='header'>
          <h1>react-stylegrid</h1>
          <h2>Lightweight CSS Grid implementation for React.</h2>
        </div>
      </Col>
      <Col size={3}></Col>

      {renderExampleCols(12)}
    </Grid>
  );
}

export default App;
