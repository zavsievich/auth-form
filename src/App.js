import React from 'react';
import Form from './components/Form';
import Picture from './components/Picture';

function App() {
  return (
    <section className="hero">
      <div className="hero__picture">
        <Picture />
      </div>
      <div className="hero__content">
        <h1 className="hero__title">
          Sign In!
        </h1>
        <p className="hero__description">
          I'm provide good semantics layout, accessible interfaces and will be happy to work with you, Martians!
        </p>
        <Form />
      </div>
    </section>
  );
}

export default App;
