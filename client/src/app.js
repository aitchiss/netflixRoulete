import React from 'react';
import ReactDOM from 'react-dom';
import MovieMain from './containers/MovieMain.jsx';

window.onload = function () {
  ReactDOM.render(
    <MovieMain />,
    document.getElementById('app')
  );
};
