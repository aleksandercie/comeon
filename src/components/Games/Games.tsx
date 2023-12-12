import { useSelector } from 'react-redux';
import { fetchGamesData, selectGames } from '../../feature/gameSlice';
import { useCallback, useEffect, useMemo } from 'react';
import { useAppDispatch } from '../../store/store';
import GameItem from '../GameItem/GameItem';
import { loadScript } from '../../helpers/loadScript';
import { scriptUrls } from '../../shared/scriptUrls';

type GamesType = {
  activeCategory: number;
  searchValue: string;
  setIsLaunchGame: React.Dispatch<React.SetStateAction<boolean>>;
};

const { comeonGames } = scriptUrls;

const Games = ({ activeCategory, searchValue, setIsLaunchGame }: GamesType) => {
  const dispatch = useAppDispatch();
  const { data: games, loading } = useSelector(selectGames);
  const filteredGames = useMemo(() => {
    return (games || []).filter(
      (item) =>
        item.categoryIds.includes(activeCategory) &&
        item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [games, activeCategory, searchValue]);

  const handleClick = useCallback(
    (code: string) => async () => {
      setIsLaunchGame(true);
      try {
        await loadScript(comeonGames);
        window.comeon.game.launch(code);
      } catch (error) {
        console.error('Script failed to load:', error);
      }
    },
    [setIsLaunchGame]
  );

  useEffect(() => {
    dispatch(fetchGamesData());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="ui relaxed divided game items links">
        <p>Loading games...</p>
      </div>
    );
  }

  return (
    <div className="ui relaxed divided game items links">
      {filteredGames.length > 0 ? (
        filteredGames?.map(({ name, icon, description, code }) => (
          <GameItem
            name={name}
            code={code}
            description={description}
            icon={icon}
            handleClick={handleClick}
            key={code}
          />
        ))
      ) : (
        <div className="description">
          <p>No games found!</p>
        </div>
      )}
    </div>
  );
};

export default Games;
