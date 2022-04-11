import React, { ComponentType, FC } from 'react';
import { useQuery } from 'react-query';
import { Redirect, Route } from 'react-router';
import { useAuth } from '../hooks';
import { fetcher } from '../plugins/react-query';
import { Role, User } from '../types';

export interface AdminRouteProps {
  path: string | string[];
  component: ComponentType;
}

export const AdminRoute: FC<AdminRouteProps> = ({
  path,
  component: Component,
}) => {
  const { authenticated } = useAuth();
  const { data: me, status } = useQuery<User>('/users/me', fetcher, {
    enabled: authenticated,
  });

  return (
    <Route
      path={path}
      render={() => {
        if (!authenticated) return <Redirect to="/login" />;
        if (status === 'loading') return <></>;
        if (status === 'success' && me && me.role === Role.ADMIN) {
          return <Component />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};
