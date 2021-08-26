import React from 'react';

import './styles/scss/app.scss';

import { Header, Top, About, Works, Services, Form, Footer, Gallery } from './components';

function App() {
  return (
    <>
      <Header />
      <Top />
      <About />
      <Works />
      <Services />
      <Form />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
