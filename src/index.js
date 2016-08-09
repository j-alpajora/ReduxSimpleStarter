import React from 'react';
import ReactDOM from 'react-dom';

// New component to produce html
const App = () => {
  return <div>Hi!</div>;
};

// Generate HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
