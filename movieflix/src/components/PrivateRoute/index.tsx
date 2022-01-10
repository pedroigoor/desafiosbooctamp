import { Redirect, Route } from "react-router-dom";
import { isAuthenticated, Role } from "util/auth";
import { hasAnyRoles } from "./../../util/auth";

type Props = {
  children: React.ReactNode;
  path: string;
  roles?: Role[];
};

const PrivateRoute = ({ children, path, roles = [] }: Props) => {
  return (
    <Route
      path={path}
      render={() =>
        !isAuthenticated() ? (
          <Redirect to="/" />
        ) : hasAnyRoles(roles) ? (
          <Redirect to="/movies" />
        ) : (
          children
        )
      }
    />
  );
};

export default PrivateRoute;
