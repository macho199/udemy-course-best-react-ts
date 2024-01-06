import React from "react";

import Header from './components/Header/Header';
import CoreComcepts from "./components/CoreComcepts";
import Examples from "./components/Examples";

const App = () => {
  console.log('APP COMPONENT EXECUTING');

  return (
    <div>
      <Header />
      <main>
        <CoreComcepts />
        <Examples />
      </main>
    </div>
  )
}

export default App;
