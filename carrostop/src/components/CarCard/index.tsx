import './styles.css';
import carImg from 'assets/images/car-card.png';

function CarCard() {
  return (
    <div className="base-card car-card">
      <div className="card-top-container">
        <img src={carImg} alt="Audi Supra TT" />
      </div>
      <div className="card-bottom-container">
        <div>
          <h6>Audi Supra TT</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
        </div>

        <div className='card-bottom-buttom row'>
          <button>COMPRAR</button>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
