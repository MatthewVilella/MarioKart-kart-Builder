import React from 'react';
import './App.css';
import { ButtonSelection } from 'src/Components/buttonSelection';
import { ChosenSelection } from 'src/Components/chosenSelection';
import { StatsBar } from 'src/Components/statsBar';
import { GlobalStateProvider } from 'src/Functions/States';

function App() {
  return (
    <GlobalStateProvider>
      <div className="Center">
        <ButtonSelection />
        <ChosenSelection />
        <StatsBar />
      </div>
    </GlobalStateProvider>
  );
}

export default App;
