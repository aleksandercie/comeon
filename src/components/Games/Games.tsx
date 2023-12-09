import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import { fetchGamesData, selectGames } from '../../feature/gameSlice';
import { useEffect } from 'react';
import { useAppDispatch } from '../../store/store';

const Games = () => {
  const dispatch = useAppDispatch();
  const { data: games, loading, error } = useSelector(selectGames);
  console.log(loading, error, games);

  useEffect(() => {
    dispatch(fetchGamesData());
  }, [dispatch]);

  return (
    <div className="ui relaxed divided game items links">
      {games?.map(({ name, icon, description, code }) => (
        <div className="game item" key={code}>
          <div className="ui small image">
            <img src={icon} alt="game-icon" />
          </div>
          <div className="content">
            <div className="header">
              <b className="name">{name}</b>
            </div>
            <div className="description">{description}</div>
            <div className="extra">
              <Button
                float="right"
                type="button"
                icon={<i className="right chevron icon" />}
                name="Play"
                classname="play"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Games;
