import React from 'react';

import './styles/scss/app.scss';

import { Header, Top, About, Works } from './components';

function App() {
  return (
    <>
      <Header />
      <Top />
      <About />
      <Works />
    </>
  );
}

export default App;
