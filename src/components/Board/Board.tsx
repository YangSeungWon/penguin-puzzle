import { Grid } from '@mui/material';
import PenguinCard from 'components/PenguinCard/PenguinCard';
import React from 'react';
import './Board.css';

function Board() {
  return (
    <div>
      <Grid container xs={8} spacing={2}>
        <PenguinCard age={1} />
        <PenguinCard age={3} />
        <PenguinCard age={0} />
        <PenguinCard age={2} />
      </Grid>
      <Grid container xs={8} spacing={2}>
        <PenguinCard age={1} />
        <PenguinCard age={3} />
        <PenguinCard age={0} />
        <PenguinCard age={2} />
      </Grid>
      <Grid container xs={8} spacing={2}>
        <PenguinCard age={1} />
        <PenguinCard age={3} />
        <PenguinCard age={0} />
        <PenguinCard age={2} />
      </Grid>
      <Grid container xs={8} spacing={2}>
        <PenguinCard age={1} />
        <PenguinCard age={3} />
        <PenguinCard age={0} />
        <PenguinCard age={2} />
      </Grid>
    </div>
  );
}

export default Board;
