import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

ReactDOM.render(<App />, document.getElementById('root'));


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);