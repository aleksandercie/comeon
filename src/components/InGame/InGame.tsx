import { scriptUrls } from '../../shared/scriptUrls';
import Button from '../Button/Button';

type InGameType = {
  isLaunchGame: boolean;
  isMobile: boolean;
  setIsLaunchGame: React.Dispatch<React.SetStateAction<boolean>>;
};

const { comeonGames } = scriptUrls;

const InGame = ({ isLaunchGame, isMobile, setIsLaunchGame }: InGameType) => {
  const handleClick = () => {
    setIsLaunchGame(false);
    const scriptElement = document.querySelector(
      `script[src="${comeonGames}"]`
    );
    if (scriptElement) {
      document.body.removeChild(scriptElement);
    }
  };

  return (
    <div
      className="ingame"
      style={{ display: `${isLaunchGame ? 'block' : 'none'}` }}
    >
      <div className="ui grid centered">
        <div className={`${isMobile ? 'sixteen' : 'three'} wide column`}>
          <Button
            float="left"
            type="button"
            icon={<i className="left chevron icon" />}
            name="Back"
            onClick={handleClick}
          />
        </div>
        <div className={`${isMobile ? 'sixteen' : 'thirteen'} wide column`}>
          <div id="game-launch"></div>
        </div>
        <div className="three wide column"></div>
      </div>
    </div>
  );
};

export default InGame;
