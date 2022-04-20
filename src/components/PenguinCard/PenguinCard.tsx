import { Card } from '@mui/material';
import React from 'react';
import './PenguinCard.css';

type PenguinCardProps = {
  age: number;
};

function PenguinCard({ age }: PenguinCardProps) {
  return (
    <Card className="PenguinCard" variant="outlined">
      {age}
    </Card>
  );
}

export default PenguinCard;
