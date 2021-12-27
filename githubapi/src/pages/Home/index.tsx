import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Desafio Github API</h1>
        <p>Bootcamp Spring React - DevSuperior</p>
        <Link to="/gitsearch">
          <button className="btn btn-primary btn-lg start-button">
            Iniciar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
