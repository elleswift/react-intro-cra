import { useState } from 'react'

import './App.css'
import CompWithFragment from './components/WithFragment'
import CounterComp from './components/Counter'
import SuperSimpleComp from './components/Simple'
import ColorComp from './components/Color'

function App() {
  
  return (
    <div className ='App-header'>
        <CompWithFragment />
        <CounterComp />
        <SuperSimpleComp />
        <ColorComp />
     </div>
  );
}







export default App;
