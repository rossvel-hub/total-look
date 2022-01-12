import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './componentes/Home';

import './App.css';

function App() {
  return (
    <Fragment>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />  
              </Route>
              </Switch>
              </Router>
    </Fragment>
  );
}
export default App;
