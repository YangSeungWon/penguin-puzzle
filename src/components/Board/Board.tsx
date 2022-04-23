import { Grid } from '@mui/material';
import PenguinCard from 'components/PenguinCard/PenguinCard';
import React from 'react';
import './Board.css';
import Penguin from 'utils/Penguin';

type BoardProps = {
  board: Penguin[][];
};

function Board({ board }: BoardProps) {
  return (
    <div>
      {
        board.map((row: Penguin[]) => (
          <Grid container xs={8} spacing={2}>
            {
              row.map((age: Penguin) => (
                <PenguinCard age={age} />
              ))
            }
          </Grid>
        ))
      }
    </div>
  );
}

export default Board;
