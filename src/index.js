import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import App from './pages/app';

import 'bootstrap/dist/css/bootstrap.css';

const containerDiv = document.getElementById('container');

ReactDOM.render(<App/>, containerDiv);