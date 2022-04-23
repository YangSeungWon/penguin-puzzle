import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Play, Make } from 'pages';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/play/:data" element={<Play />} />
        <Route path="/play" element={<Play />} />
        <Route path="/make" element={<Make />} />
      </Routes>
    </div>
  );
}

export default App;
