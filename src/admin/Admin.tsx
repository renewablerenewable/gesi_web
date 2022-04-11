import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Sidebar } from '../components/Sidebar';
import { AdminHeader } from './components/AdminHeader';
import { AdminMain } from './components/AdminMain';
import { UserShow } from './pages/UserShow';
import { UserList } from './pages/UserList';
import { UserEdit } from './pages/UserEdit';

export const Admin = () => {
  return (
    <div className="h-screen flex">
      <Sidebar>
        <Sidebar.Title>Admin</Sidebar.Title>
        <Sidebar.Menu>
          <Sidebar.Menu.Item text="Users" to="/admin/users" />
        </Sidebar.Menu>
      </Sidebar>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <AdminHeader />
        <AdminMain>
          <Switch>
            <Route path="/admin/users/:id/edit" component={UserEdit} />
            <Route path="/admin/users/:id" component={UserShow} />
            <Route path="/admin/users" component={UserList} />
            <Route path="/">
              <Redirect to="/admin/users" />
            </Route>
          </Switch>
        </AdminMain>
      </div>
    </div>
  );
};
