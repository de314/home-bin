import React from 'react'

import { Redirect, Route, Switch } from 'react-router-dom'
import HomePage from 'routes/home/HomePage'
import DemoTitlePage from 'routes/demo/DemoTitlePage'
import ComingSoonPage from 'routes/utils/ComingSoonPage'
import NotFoundPage from 'routes/utils/NotFoundPage'

const MainRoutes = () => (
  <div className="MainRoutes">
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/demo" component={DemoTitlePage} />
      <Route exact path="/comingSoon" component={ComingSoonPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
)

export default MainRoutes
