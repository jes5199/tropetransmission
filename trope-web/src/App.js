
import React, { useState } from 'react';

import './App.css';
import TropeCatalogue from './Views/TropeCatalogue.js';

function App() {
  const [tropText, setTropText] = useState("טִפְחָ֖א");

  return (
    <div className="App">
      <input value={tropText} onChange={setTropText} style={{fontSize: 48, textAlign: "right"}} />

      <TropeCatalogue/>
    </div>
  );
}

export default App;
