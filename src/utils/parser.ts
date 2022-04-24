import Penguin from 'utils/Penguin';

function chunkString(str: string, length: number) {
  return str.match(new RegExp(`.{${length}}`, 'g'));
}

function parsePenguin(cell: string): Penguin {
  if (cell === '-') {
    return Penguin.EMPTY;
  }
  return (parseInt(cell, 10) as Penguin);
}

function parsePenguins(data: string): Penguin[] {
  const ret: Penguin[] = [];
  for (let i = 0; i < data.length; i += 1) {
    ret.push(parsePenguin(data[i]));
  }
  return ret;
}

class ParseError extends Error {
  constructor(msg: string) {
    super(msg);
    Object.setPrototypeOf(this, ParseError.prototype);
  }
}

const regex = /^(\d+),(\d+):([-\d]+)$/;

export function parse(data: string): Penguin[][] {
  const match = data.match(regex);
  if (match === null) {
    throw new ParseError('completely malformed data');
  }
  const rows = parseInt(match[1], 10);
  const cols = parseInt(match[2], 10);
  const boardData = chunkString(match[3], cols);
  if (boardData === null || boardData.length !== rows) {
    throw new ParseError('malformed data');
  }
  return boardData.map((rowData: string) => (
    parsePenguins(rowData)
  ));
}

export function stringify(data: Penguin[][]): string {
  const rows = data.length;
  const cols = data[0].length;
  return `${rows},${cols}:`;
}
