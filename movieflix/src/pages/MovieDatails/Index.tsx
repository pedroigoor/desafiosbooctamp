import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Movie } from "type/movie";
import { requestBackend } from "util/requests";
import "./styles.css";
import ButtonIcon from "./../../components/ButtonIcon/index";
import ListReview from "./../../components/ListReview/index";
import { hasAnyRoles } from "./../../util/auth";

type UrlParams = {
  movieId: string;
};

type FormData = {
  review: string;
};
const MovieDatails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { movieId } = useParams<UrlParams>();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: `/movies/${movieId}`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  const onSubmit = (formData: FormData) => {

    const params: AxiosRequestConfig = {
      method: "POST",
      url: `/reviews`,
      withCredentials: true,
      data: {
        text: formData.review,
        movieId: movie?.id,
      },
    };

    requestBackend(params).then((response) => {  
      window.location.reload()
    });
  };

  return (
    <div className="movie-datail-conteiner">
      <h1>Detalhes do filme: {movie?.title} </h1>
      <div className="movie-datail-content">
        <div className=" movie-datail-img">
          <img src={movie?.imgUrl} alt={movie?.title} />
        </div>
        {hasAnyRoles(["ROLE_MEMBER"]) && (
          <div className="movie-datail-review base-card  row">
            <div className="mb-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("review", {
                    required: "Campo obrigatório",
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.review ? "is-invalid" : ""
                  }`}
                  placeholder="Deixe sua avaliação"
                  name="review"
                />
                <div className="invalid-feedback d-block">
                  {errors.review?.message}
                </div>

                  <div className="review-submit">
                    <ButtonIcon text="SALVAR AVALIAÇÃO" />
                  </div>
                
              </form>
            </div>
          </div>
        )}
        <div className="movie-datail-list-reviews base-card  row">
          {movie && <ListReview movieId={movie?.id}></ListReview>}
        </div>
      </div>
    </div>
  );
};

export default MovieDatails;
