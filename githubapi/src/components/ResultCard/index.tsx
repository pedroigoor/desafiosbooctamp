import { Profile } from 'types/profile';
import './styles.css';

type Props = {
  profile: Profile;
};

const ResultCard = ({ profile }: Props) => {
  return (
    <div className="container profile-container">
      <div className="profile-container-top">
        <img src={profile?.avatar_url} alt={profile?.name} />
      </div>

      <div className="row profile-container-bottom">
        <h2>Informações</h2>

        <div className="col-12">
          <span>Perfil: </span>
          {profile?.url}
        </div>
        <div className="col-12">
          <span>Seguidores: </span>
          {profile?.followers}
        </div>

        <div className="col-12">
          {' '}
          <span>Localidade: </span>
          {profile?.location}
        </div>
        <div className="col-12">
          {' '}
          <span>Nome: </span>
          {profile?.name}
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
