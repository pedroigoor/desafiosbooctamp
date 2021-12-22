import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from 'components/NavBar';
import Home from 'page/Home';
import Catalog from 'page/Catalog';

const Routes = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/cars">
        <Catalog />
      </Route>
    
    </Switch>
  </BrowserRouter>
);

export default Routes;
