import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { AuthRoute } from '../components/AuthRoute';
import { LoginPage } from './LoginPage';
// import { HomePage } from './HomePage';
import { MyPage } from './MyPage';
import { SignupPage } from './SignupPage';
import { TopNavBar } from '../components/TopNavBar';
import { OverviewPage } from './OverviewPage';
import { BottomBar } from '../components/BottomBar';
import { EnergySystemPage } from './EnergySystemPage';
import { P2XPage } from './P2XPage';
import { P2XBalancingPage } from './P2XBalancingPage';
import { P2HConversionPage } from './P2HConversionPage';
import { P2GConversionPage } from './P2GConversionPage';
import { SummaryPage } from './SummaryPage';
import { NDCPage } from './info/NDCPage';
import { PowerPage } from './info/PowerPage';
import { IndustryPage } from './info/IndustryPage';
import { BuildingPage } from './info/BuildingPage';
import { TransportPage } from './info/TransportPage';

export const Router = () => {
  return (
    <div className="min-h-screen flex flex-col flex-1">
      <main className="relative flex-1 flex flex-col bg-gray-50">
        <TopNavBar />
        <div className="max-w-screen-2xl mx-auto flex-1 w-full">
          <Switch>
            <Route path="/info/transport" component={TransportPage} />
            <Route path="/info/building" component={BuildingPage} />
            <Route path="/info/industry" component={IndustryPage} />
            <Route path="/info/power" component={PowerPage} />
            <Route path="/info/ndc" component={NDCPage} />
            <Route path="/summary" component={SummaryPage} />
            <Route path="/conversion/p2g" component={P2GConversionPage} />
            <Route path="/conversion/p2h" component={P2HConversionPage} />
            <Route path="/balancing/p2x" component={P2XBalancingPage} />
            <Route path="/p2x" component={P2XPage} />
            <Route path="/energy" component={EnergySystemPage} />
            <Route path="/overview" component={OverviewPage} />
            <AuthRoute path="/signup" component={SignupPage} guestOnly />
            <AuthRoute path="/login" component={LoginPage} guestOnly />
            <AuthRoute path="/mypage" component={MyPage} />
            {/* <Route path="/" component={HomePage} exact /> */}
            <Route path="/">
              <Redirect to="/overview" />
            </Route>
          </Switch>
        </div>
        <BottomBar />
      </main>
    </div>
  );
};
