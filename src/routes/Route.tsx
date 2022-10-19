import React, { ElementType } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

import Header from 'components/Header';
import { getToken, getUsername, logout } from 'utils/security';

type RouteWrapperProps = RouteProps & {
  component: ElementType;
  isPrivate?: boolean;
};

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}: RouteWrapperProps) {
  const token = getToken();
  const username = getUsername();

  if (isPrivate && !token && !username) {
    return <Redirect to="/login" />;
  }

  if (!isPrivate && token && username) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header logout={logout} hasMenu={isPrivate} name={username} />
      <Route {...rest} render={(props) => <Component {...props} />} />
    </>
  );
}
