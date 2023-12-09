import logo from './images/logo.svg';

import './semantic.css';
import './App.css';
import InputWrapper from './components/InputWrapper/InputWrapper';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Player from './components/Player/Player';
import Categories from './components/Categories/Categories';

function App() {
  return (
    <>
      <div className="ui one column center aligned page grid">
        <div className="column twelve wide">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="main container">
        <div className="login">
          <div className="ui grid centered">
            <form>
              <div className="fields">
                <InputWrapper required>
                  <input type="text" name="username" placeholder="Username" />
                  <i className="user icon" />
                </InputWrapper>
                <InputWrapper required>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <i className="lock icon" />
                </InputWrapper>
                <div className="field">
                  <div className="ui icon input">
                    <input type="submit" value="Login" />
                    <i className="right chevron icon"></i>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="casino">
          <div className="ui grid centered">
            <div className="twelve wide column">
              <div className="ui list">
                <Player />
              </div>
              <Button
                float="left"
                type="button"
                icon={<i className="left chevron icon" />}
                name="Log Out"
                classname="logout"
              />
            </div>
            <div className="four wide column">
              <InputWrapper required={false}>
                <input type="text" placeholder="Search Game" />
                <i className="search icon" />
              </InputWrapper>
            </div>
          </div>
          <div className="ui grid">
            <div className="twelve wide column">
              <Header title="Games" />
              <div className="ui relaxed divided game items links">
                {/* game item template */}
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
                {/* end game item template */}
              </div>
            </div>
            <div className="four wide column">
              <Header title="Categories" />
              <Categories />
            </div>
          </div>
        </div>
        <div className="ingame">
          <div className="ui grid centered">
            <div className="three wide column">
              <Button
                float="left"
                type="button"
                icon={<i className="left chevron icon" />}
                name="Back"
              />
            </div>
            <div className="ten wide column">
              <div id="game-launch"></div>
            </div>
            <div className="three wide column"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
