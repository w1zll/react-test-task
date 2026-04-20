import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './styles/index.css';
import { RouterProvider } from 'react-router/dom';
import router from './providers/RouterProvider';

const rootView = document.getElementById('root');

if (rootView) {
  ReactDOM.render(
    <React.StrictMode>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </React.StrictMode>,
    rootView,
  );
}
