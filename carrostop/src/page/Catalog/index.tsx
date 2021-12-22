import ButtomSearch from 'components/ButtomSearch';
import CarCard from 'components/CarCard';

import './styles.css';

function Catalog() {
  return (
    <div className="catalog-container">
      <div>
        <div className=" base-card catalog-content">
          <ButtomSearch></ButtomSearch>
        </div>

        <div className="container my-4 car-container">
          <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <CarCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
