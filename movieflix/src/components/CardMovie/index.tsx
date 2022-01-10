import { Movie } from "type/movie";
import "./styles.css";


type Props = {
  movie: Movie;
}
const CardMovie = ({ movie } : Props) => {
  return (
    <div className="base-card  card-container">
      <div className="card-container-img">
      <img src={movie.imgUrl} alt={movie.title}></img>
      </div>
      <div className="card-container-text">
      <h1>{movie.title}</h1>
      </div>
    </div>
  );
};

export default CardMovie;
