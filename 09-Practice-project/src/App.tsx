import React, { useState } from 'react';
import ProjectSidebar from './components/ProjectSidebar';
import NewProject from './components/NewProject';

const App = () => {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar />
      <NewProject />
    </main>
  );
};

export default App;
