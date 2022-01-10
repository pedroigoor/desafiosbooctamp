import NavBar from "components/NavBar";
import Login from "pages/Login/Index";
import MovieDatails from "pages/MovieDatails/Index";
import { Route, Router, Switch } from "react-router-dom";
import history from "util/history";
import ListMovie from './pages/ListMovie/Index';

const Routes = () => (
  <Router history={history}>
    <NavBar />
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/movies" exact>
        <ListMovie />
      </Route>
      <Route path="/movies/:movieId" exact>
        <MovieDatails />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
