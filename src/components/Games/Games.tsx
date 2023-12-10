import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import { fetchGamesData, selectGames } from '../../feature/gameSlice';
import { useEffect } from 'react';
import { useAppDispatch } from '../../store/store';
import { GameType } from '../../feature/models';

type GamesType = {
  activeCategory: number;
  searchValue: string;
};

const Games = ({ activeCategory, searchValue }: GamesType) => {
  const dispatch = useAppDispatch();
  const { data: games } = useSelector(selectGames);
  const filteredGames = (games || []).reduce((acc, item) => {
    if (
      item.categoryIds.includes(activeCategory) &&
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    ) {
      acc.push(item);
    }
    return acc;
  }, [] as GameType[]);

  useEffect(() => {
    dispatch(fetchGamesData());
  }, [dispatch]);

  return (
    <div className="ui relaxed divided game items links">
      {filteredGames.length > 0 ? (
        filteredGames?.map(({ name, icon, description, code }) => (
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
        ))
      ) : (
        <div className="description">No games found</div>
      )}
    </div>
  );
};

export default Games;
