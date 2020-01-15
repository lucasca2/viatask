import React from 'react';
import { Route } from 'react-router-dom';

// Layouts
import MainLayout from "components/_Layouts/MainLayout";

export default function RouteWrapper({
  component: Component,
  ...rest
}) {

  return (
    <Route
      {...rest}
      render={props => (
        <MainLayout>
          <Component {...props} />
        </MainLayout>
      )}
    />
  )
}
