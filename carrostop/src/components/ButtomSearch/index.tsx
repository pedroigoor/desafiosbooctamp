import './styles.css';

function ButtomSearch() {
  return (
    <div className="input-group mb-3 buttom-content">
      <input
        type="text"
        className="form-control input-buttom"
        placeholder="Digite sua busca"
        aria-label="Digite sua busca"
        aria-describedby="button-addon2"
      ></input>
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        Buscar
      </button>
    </div>
  );
}

export default ButtomSearch;
