import { useSelector } from 'react-redux';
import { selectAuth } from '../../feature/authSlice';

const Player = () => {
  const { data } = useSelector(selectAuth);
  const player = data?.player;

  return player ? (
    <div className="player item">
      <img className="ui avatar image" src={player.avatar} alt="avatar" />
      <div className="content">
        <div className="header">
          <b className="name">{player.name}</b>
        </div>
        <div className="description event">{player.event}</div>
      </div>
    </div>
  ) : null;
};

export default Player;
