import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.scss';
const App = () => {
  return <h2>Hello <span>World</span></h2>
}
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
