import { AuthType } from '../../feature/models';

type PlayerProps = {
  player: AuthType['player'];
};

const Player = ({ player }: PlayerProps) => {
  const { avatar, name, event } = player;

  return (
    <div className="player item">
      {avatar ? (
        <img
          className="ui avatar image"
          src={avatar}
          alt={`${name}'s avatar`}
          loading="lazy"
        />
      ) : null}
      <div className="content">
        <div className="header">
          <strong className="name">{name}</strong>
        </div>
        <div className="description event">{event}</div>
      </div>
    </div>
  );
};

export default Player;
