import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { AuthRoute } from '../components/AuthRoute';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { MyPage } from './MyPage';
import { SignupPage } from './SignupPage';

export const Router = () => {
  return (
    <div className="min-h-screen flex flex-col flex-1">
      <main className="relative flex-1 flex flex-col">
        <Switch>
          <AuthRoute path="/signup" component={SignupPage} guestOnly />
          <AuthRoute path="/login" component={LoginPage} guestOnly />
          <AuthRoute path="/mypage" component={MyPage} />
          <Route path="/" component={HomePage} exact />
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
    </div>
  );
};
