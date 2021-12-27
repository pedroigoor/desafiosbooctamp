import { useState } from 'react';
import axios from 'axios';
import './styles.css';
import ResultCard from 'components/ResultCard';
import { Profile } from 'types/profile';

type FormData = {
  user: string;
};

const GitSearch = () => {
  const [profile, setProfile] = useState<Profile>();
  const [formData, setFormData] = useState<FormData>({
    user: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${formData.user}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        setProfile(undefined);
        console.log(error);
      });
  };

  return (
    <>
      <div className="git-search-container">
        <div className="container search-container">
          <h1>Encontre um perfil Github</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <input
                type="text"
                name="user"
                className="search-input"
                placeholder="Usuário Github"
                onChange={handleChange}
              />
              <button type="submit" className="btn btn-primary search-button">
                Encontrar
              </button>
            </div>
          </form>
        </div>
        {profile && <ResultCard profile={profile} />}
      </div>
    </>
  );
};

export default GitSearch;
