import { Card } from '@mui/material';
import React from 'react';
import './PenguinCard.css';
import Penguin from 'utils/Penguin';

type PenguinCardProps = {
  age: Penguin;
};

function PenguinCard({ age }: PenguinCardProps) {
  return (
    <Card className="PenguinCard" variant="outlined">
      {age !== Penguin.EMPTY ? age : ''}
    </Card>
  );
}

export default PenguinCard;
