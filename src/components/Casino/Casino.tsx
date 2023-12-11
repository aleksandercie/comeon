import { useState } from 'react';
import Header from '../Header/Header';
import Categories from '../Categories/Categories';
import Button from '../Button/Button';
import Player from '../Player/Player';
import InputWrapper from '../InputWrapper/InputWrapper';
import Games from '../Games/Games';
import { logoutAsync, selectAuth } from '../../feature/authSlice';
import { useAppDispatch } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { links } from '../../shared/links';

type CasionType = {
  isMobile: boolean;
  setIsLaunchGame: React.Dispatch<React.SetStateAction<boolean>>;
};

const { homepage } = links;

const Casino = ({ isMobile, setIsLaunchGame }: CasionType) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data } = useSelector(selectAuth);
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);
  const handleLogout = () => {
    if (data && data.player) {
      dispatch(logoutAsync(data.player?.login));
      navigate(homepage);
    }
  };

  const renderPlayer =
    data && data.player ? <Player player={data.player} /> : null;

  return (
    <div className="casino">
      <div className="ui grid centered">
        <div className={`${isMobile ? 'sixteen' : 'twelve'} wide column`}>
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
        <div className={`${isMobile ? 'sixteen' : 'four'} wide column`}>
          <InputWrapper required={false} isMobile={isMobile}>
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
        {isMobile ? (
          <div className="sixteen wide column">
            <Categories setActiveCategory={setActiveCategory} />
          </div>
        ) : null}
        <div className={`${isMobile ? 'sixteen' : 'twelve'} wide column`}>
          <Header title="Games" />
          <Games
            activeCategory={activeCategory}
            searchValue={searchValue}
            setIsLaunchGame={setIsLaunchGame}
          />
        </div>
        {!isMobile ? (
          <div className="four wide column">
            <Categories setActiveCategory={setActiveCategory} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Casino;
