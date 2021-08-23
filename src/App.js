import React from 'react';

import './styles/scss/app.scss';

import { Header, Top, About, Works, Services, Form, Footer } from './components';

function App() {
  return (
    <>
      <Header />
      <Top />
      <About />
      <Works />
      <Services />
      <Form />
      <Footer />
    </>
  );
}

export default App;
