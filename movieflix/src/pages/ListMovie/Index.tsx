import { AxiosRequestConfig } from "axios";
import CardMovie from "components/CardMovie";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Movie } from "type/movie";
import { SpringPage } from "type/vendor/spring";
import { requestBackend } from "util/requests";
import "./styles.css";

const ListMovie = () => {
  const [movie, setMovie] = useState<SpringPage<Movie>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: "/movies",
      withCredentials: true,
      params: {
        page: 0,
        size: 12,
      },
    };

    requestBackend(params).then((response) => {      
      setMovie(response.data);
    });
  }, []);
  return (
    <div className="list-movie-container row">
      <h1>Tela listagem de filmes</h1>
      {movie?.content.map((movie) => (
        <div className="col-sm-6 col-lg-4 col-xl-3" key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <CardMovie movie={movie} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ListMovie;
