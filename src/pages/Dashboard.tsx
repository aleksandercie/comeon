import { useState } from 'react';
import Button from '../components/Button/Button';
import Categories from '../components/Categories/Categories';
import Games from '../components/Games/Games';
import Header from '../components/Header/Header';
import InputWrapper from '../components/InputWrapper/InputWrapper';
import Layout from '../components/Layout/Layout';
import Player from '../components/Player/Player';
import { useAppDispatch } from '../store/store';
import { logoutAsync } from '../feature/authSlice';
import { useNavigate } from 'react-router-dom';
import { AuthType } from '../feature/models';

type DashboardType = {
  data: null | AuthType;
};

const Dashboard = ({ data }: DashboardType) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [isLaunchGame, setIsLaunchGame] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);
  const handleClick = () => setIsLaunchGame(false);

  const handleLogout = () => {
    if (data && data.player) {
      dispatch(logoutAsync(data.player?.login));
      navigate('/');
    }
  };

  const renderPlayer =
    data && data.player ? <Player player={data.player} /> : null;

  return (
    <Layout>
      <>
        <div
          className="ingame"
          style={{ display: `${isLaunchGame ? 'block' : 'none'}` }}
        >
          <div className="ui grid centered">
            <div className="three wide column">
              <Button
                float="left"
                type="button"
                icon={<i className="left chevron icon" />}
                name="Back"
                onClick={handleClick}
              />
            </div>
            <div className="ten wide column">
              <div id="game-launch"></div>
            </div>
            <div className="three wide column"></div>
          </div>
        </div>
        {isLaunchGame ? null : (
          <div className="casino">
            <div className="ui grid centered">
              <div className="twelve wide column">
                <div className="ui list">{renderPlayer}</div>
                <Button
                  float="left"
                  type="button"
                  icon={<i className="left chevron icon" />}
                  name="Log Out"
                  classname="logout"
                  onClick={handleLogout}
                />
              </div>
              <div className="four wide column">
                <InputWrapper required={false}>
                  <input
                    type="text"
                    placeholder="Search Game"
                    value={searchValue}
                    onChange={handleChange}
                  />
                  <i className="search icon" />
                </InputWrapper>
              </div>
            </div>
            <div className="ui grid">
              <div className="twelve wide column">
                <Header title="Games" />
                <Games
                  activeCategory={activeCategory}
                  searchValue={searchValue}
                  setIsLaunchGame={setIsLaunchGame}
                />
              </div>
              <div className="four wide column">
                <Header title="Categories" />
                <Categories setActiveCategory={setActiveCategory} />
              </div>
            </div>
          </div>
        )}
      </>
    </Layout>
  );
};

export default Dashboard;
