import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../routes';

function RootContainer() {
  return (
    <BrowserRouter>
      { renderRoutes(routes) }
    </BrowserRouter>
  );
}

export { RootContainer };
