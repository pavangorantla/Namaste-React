import React from 'react';
import ReactDOM from 'react-dom/client';

const TitleComponent = () => (
  <h1 className="head" tabIndex="1">
    Hello Pavan using JSX Concept
  </h1>
);

//React Functional Component and rendering it on the screen.

const number = 1000;

const FooterComponent = () => (
  <div id="container">
    <h2>{number}</h2>
    <TitleComponent />
    <TitleComponent></TitleComponent>
    <h1 className="heading">Footer Component1</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<FooterComponent />);
