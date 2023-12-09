import Button from '../Button/Button';

const Games = () => {
  return (
    <div className="ui relaxed divided game items links">
      <div className="game item">
        <div className="ui small image">
          <img src="" alt="game-icon" />
        </div>
        <div className="content">
          <div className="header">
            <b className="name"></b>
          </div>
          <div className="description"></div>
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
    </div>
  );
};

export default Games;
