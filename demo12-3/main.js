
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Component1 from './Component1';
import Component2 from './Component2';


const div = document.getElementById('a');
ReactDOM.render(<Component1/>, div);

const div2 = document.getElementById('b');
ReactDOM.render(<Component2/>, div2);
