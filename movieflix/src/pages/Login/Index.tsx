import ButtonIcon from "components/ButtonIcon";
import { useForm } from "react-hook-form";
import { ReactComponent as AuthImage } from "assets/images/auth-image.svg";
import { useHistory } from "react-router-dom";
import "./styles.css";
import { requestBackendLogin } from "util/requests";
import { useContext, useState } from "react";
import { saveAuthData } from "util/storage";
import { AuthContext } from "./../../AuthContext";

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [hasError, setHasError] = useState(false);
  const history = useHistory();
  const { setAuthContextData } = useContext(AuthContext);

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        setHasError(false);
        setAuthContextData({
          authenticated: true,
        });
        history.push("/movies");
      })
      .catch((error) => {
        setHasError(true);
      });
  };
  return (
    <div className="login-container">
      <div className="auth-banner-container">
        <h1>Avalie Filmes</h1>
        <p>
          Diga o que você achou do seu
          <br /> filme favorito
        </p>
        <AuthImage />
      </div>
      <div className="base-card login-card">
        <h1>LOGIN</h1>

        {hasError && (
          <div className="alert alert-danger">
            Erro ao tentar efetuar o login
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              {...register("username", {
                required: "Campo obrigatório",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido",
                },
              })}
              type="text"
              className={`form-control base-input ${
                errors.username ? "is-invalid" : ""
              }`}
              placeholder="Email"
              name="username"
            />
            <div className="invalid-feedback d-block">
              {errors.username?.message}
            </div>
          </div>
          <div className="mb-2">
            <input
              {...register("password", {
                required: "Campo obrigatório",
              })}
              type="password"
              className={`form-control base-input ${
                errors.password ? "is-invalid" : ""
              }`}
              placeholder="Password"
              name="password"
            />
            <div className="invalid-feedback d-block">
              {errors.password?.message}
            </div>
          </div>
          <div className="login-submit">
            <ButtonIcon text="Fazer login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
