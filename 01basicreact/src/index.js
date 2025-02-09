import React from 'react';
import ReactDOM from 'react-dom/client'; // Implentation on web-page

import App from './App';
import Abuzar from './abuzar';

//DOM is tree structure like in DSA

const root = ReactDOM.createRoot(document.getElementById('root'));

// render mean displaying UI components on the screen
// Like HTML output on Browser

root.render(

  // React strickMood is react property, it also work without this mood

  <React.StrictMode>
    <App />
    <Abuzar />
  </React.StrictMode>
);