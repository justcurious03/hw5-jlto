import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './component/style.css';
import Home from './component/Home';
import reportWebVitals from './reportWebVitals';
import Main from './component/Main';
import Sub from './component/Sub';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "cats",
      element: <Main />,
    },
    {
      path: "dogs",
      element: <Sub />,
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
