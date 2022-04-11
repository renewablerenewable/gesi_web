import { ComponentType, FC } from 'react';
import { Redirect, Route } from 'react-router';
import { useAuth } from '../hooks';

export interface AuthRouteProps {
  path: string | string[];
  component: ComponentType;
  redirectTo?: string;
  guestOnly?: boolean;
  guestOnlyRedirectTo?: string;
}

export const AuthRoute: FC<AuthRouteProps> = ({
  path,
  component: Component,
  redirectTo = '/login',
  guestOnly = false,
  guestOnlyRedirectTo = '/',
}) => {
  const { authenticated } = useAuth();

  return (
    <Route
      path={path}
      render={() => {
        if (guestOnly && authenticated) {
          return <Redirect to={guestOnlyRedirectTo} />;
        }
        if (!guestOnly && !authenticated) {
          return <Redirect to={redirectTo} />;
        }
        return <Component />;
      }}
    />
  );
};
