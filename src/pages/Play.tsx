import React from 'react';
import Board from 'components/Board/Board';
import { Link, useParams } from 'react-router-dom';
import { parse } from 'utils/parser';

function Play() {
  let { data } = useParams();
  if (data === undefined) {
    data = '1,1:-';
  }
  try {
    const board = parse(data);
    return (
      <div className="Play">
        <Board board={board} />
      </div>
    );
  } catch (err) {
    return (
      <div className="Play">
        <p>An error occurred while parsing board data.</p>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }
}

export default Play;
