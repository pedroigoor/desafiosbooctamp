import "./styles.css";
import { isAuthenticated } from "util/auth";
import { useContext, useEffect } from "react";
import { removeAuthData } from "util/storage";
import history from "util/history";
import { AuthContext } from "AuthContext";
import { Link } from 'react-router-dom';


const NavBar = () => {

  const {authContextData, setAuthContextData} = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace("/")
  };
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <Link to={`/movies`} className="nav-logo-text">
          <h4>MovieFlix</h4>
        </Link>
        
        {authContextData.authenticated ? (
          <a className="nav-exit" onClick={handleLogoutClick}>
            <h1> Sair</h1>
          </a>
        ) : undefined}
      </div>
    </nav>
  );
};

export default NavBar;
