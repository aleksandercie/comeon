import { AuthType } from '../../feature/models';

type PlayerProps = {
  player: AuthType['player'];
};

const Player = ({ player }: PlayerProps) => {
  const { avatar, name, event } = player;

  return (
    <div className="player item">
      <img
        className="ui avatar image"
        src={avatar}
        alt="avatar"
        loading="lazy"
      />
      <div className="content">
        <div className="header">
          <b className="name">{name}</b>
        </div>
        <div className="description event">{event}</div>
      </div>
    </div>
  );
};

export default Player;
