import React from 'react';
import Home from 'views/Home/';
import App from '../App';
import Login from 'views/Auth/Login';
import EmailVerify from 'views/Auth/EmailVerify';

import { RouteObject } from 'react-router-dom';

const appRoutes: Array<RouteObject> = [
  {
    path: '/',
    element: <App />,
    children: [{
      path: 'home',
      element: <Home />
    }]
  },
  {
    path: '/auth/login',
    element: <Login />,
  },
  {
    path: '/auth/verify',
    element: <EmailVerify />,
  },
];
export default appRoutes;
