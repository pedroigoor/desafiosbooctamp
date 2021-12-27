import './styles.css';

type Props = {
  title: string;
  description: string;
};

const ResultCard = ({ title, description }: Props) => {
  return (
    <div className="container profile-container">
      <div className="profile-container-top">
        <img
          src="https://avatars.githubusercontent.com/u/17938614?v=4"
          alt=""
        />
      </div>

      <div className="row profile-container-bottom">
        <div className="col-12"> Infromaçõos</div>
        <div className="col-12"> https://api.github.com/users/pedroigoor</div>
        <div className="col-12">2</div>

        <div className="col-12">Olinda,PE,Brazil</div>
        <div className="col-12">Pedro Almeida</div>
      </div>
    </div>
  );
};

export default ResultCard;
