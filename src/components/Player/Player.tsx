import { AuthType } from '../../feature/models';

const Player = ({ player }: Pick<AuthType, 'player'>) => {
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
