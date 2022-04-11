import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Admin } from './admin/Admin';
import { AdminRoute } from './components/AdminRoute';
import { ScrollToTop } from './components/ScrollToTop';
import { Router } from './pages/Router';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <AdminRoute path="/admin" component={Admin} />
        <Route path="/" component={Router} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
