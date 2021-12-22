import CarHome from 'assets/images/car-home.png';
import { Link } from 'react-router-dom';

import './styles.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="base-card  home-top-container">
          <div className="home-top-image-container">
            <img src={CarHome} alt="NOMEP ROD" />
          </div>

          <div className="home-top-text-container">
            <div>
              <h1>O carro perfeito para você</h1>
              <p>
                Conheça nossos carros e dê mais um passo na realização do seu
                sonho
              </p>
            </div>
          </div>
        </div>

        <div className="home-bottom-container">
          <Link to="/cars">
            <button className="button-catalog">
              <h6>VER CATÁLOGO</h6>
            </button>
          </Link>
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
