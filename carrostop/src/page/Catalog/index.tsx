import CarHome from 'assets/images/car-home.png';
import ButtomSearch from 'components/ButtomSearch';

import './styles.css';

function Catalog() {
  return (
    <div className="catalog-container">
      <div className=" base-card catalog-content">
      <ButtomSearch></ButtomSearch>
        <div className="container my-4">
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
