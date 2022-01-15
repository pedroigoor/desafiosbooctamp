import { AxiosRequestConfig } from "axios";
import CardMovie from "components/CardMovie";
import MovieFilter, { MovieFilterData } from "components/MovieFilter";
import Pagination from "components/Pagination";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Movie } from "type/movie";
import { SpringPage } from "type/vendor/spring";
import { requestBackend } from "util/requests";
import "./styles.css";

type ControlComponentsData = {
  activePage: number;
  filterData: MovieFilterData;
};

const ListMovie = () => {
  const [movie, setMovie] = useState<SpringPage<Movie>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: { genre: null },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterData: controlComponentsData.filterData,
    });
  };

  const handleSubmitFilter = (data: MovieFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data });
  };

  const getMovies = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: "/movies",
      withCredentials: true,
      params: {
        page: controlComponentsData.activePage,
        size: 4,
        genreId: controlComponentsData.filterData.genre?.id,
      },
    };
    requestBackend(params).then((response) => {
      setMovie(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div className=" container my-4  list-movie-container">
      <div className="list-movie-filter">
        <MovieFilter onSubmitFilter={handleSubmitFilter} />
      </div>

      <div className="row">
        {movie?.content.map((movie) => (
          <div className="col-sm-6 col-lg-4 col-xl-3" key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <CardMovie movie={movie} />
            </Link>
          </div>
        ))}
      </div>

      <div className="row">
        <Pagination
          forcePage={movie?.number}
          pageCount={movie ? movie.totalPages : 0}
          range={12}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ListMovie;
