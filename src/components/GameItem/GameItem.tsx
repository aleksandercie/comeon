import { GameType } from '../../feature/models';
import Button from '../Button/Button';

type GameItemType = Omit<GameType, 'categoryIds'> & {
  handleClick: (code: string) => () => void;
};

const GameItem = ({
  icon,
  name,
  description,
  handleClick,
  code,
}: GameItemType) => (
  <div className="game item">
    <div className="ui small image">
      <img src={icon} alt="game-icon" loading="lazy" />
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
          onClick={handleClick(code)}
          name="Play"
          classname="play"
        />
      </div>
    </div>
  </div>
);

export default GameItem;
