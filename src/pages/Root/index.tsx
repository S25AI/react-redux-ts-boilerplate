import React from 'react';
import { renderRoutes } from 'react-router-config';

export const Root = ({ route }: any) => (
  <>
    {renderRoutes(route.routes)}
  </>
);
