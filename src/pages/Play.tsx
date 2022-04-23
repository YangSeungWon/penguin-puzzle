import React from 'react';
import Board from 'components/Board/Board';
import { useParams } from 'react-router-dom';
import { parse } from 'utils/parser';

function App() {
  let { data } = useParams();
  if (data === undefined) {
    data = '1,1:-';
  }
  return (
    <div className="App">
      <Board board={parse(data)} />
    </div>
  );
}

export default App;
